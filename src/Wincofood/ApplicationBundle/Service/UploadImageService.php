<?php

namespace Wincofood\ApplicationBundle\Service;

class UploadImageService {

	private $uploadDir = 'defaults';
	private $uploadRoot;
	private $webRoot;
	private $limitFileSize;

	function __construct($limitFileSize) {
		$this->uploadRoot = __DIR__ . '/../../../../web/uploads/';
		$this->webRoot   = __DIR__ . '/../../../../web/';
		$this->limitFileSize = $limitFileSize * 1024000;
		if (!file_exists($this->uploadRoot)) {
			mkdir($this->uploadRoot);
		}
	}
	
	/**
	 * Generate random string
	 * @author Rony <rony@likipe.se>
	 * @param int $length
	 * @return string
	 */
	public function randomString($length = 10) {
		$keys = array_merge(range(0, 9), range('a', 'z'));
		$key = '';
		for ($i = 0; $i < $length; $i++) {
			$key .= $keys[array_rand($keys)];
		}
		
		return $key;
	}

	/**
	 * Upload image
	 * @author Rony <rony@likipe.se>
	 * @param array $_FILES
	 * @param string $folder Folder upload
	 * @return string fileUpload
	 */
	public function uploadImage($aFile = array(), $folder = '', $rotateAngel = '') {
		if (empty($aFile)) {
			return;
		}
		if ('' == trim($folder)) {
			$folder = $this->uploadDir;
		}
		
		foreach ($aFile as $aFiles) {
			if ($aFiles['error'] > 0) return;
			if ($aFiles['size'] > $this->limitFileSize) {
				return;
			}
			$fileName = pathinfo($aFiles['name']);
			$fileUpload = time('now') . '-' . $this->randomString() .  '.' . $fileName['extension'];

			//Kevin - check isset folder
			$sDir = $this->uploadRoot . $folder;
			if (!file_exists($sDir)) {
				mkdir($sDir);
			}
			//echo $sDir; die();
			$sNewFilePath = $sDir . '/' . $fileUpload;
			move_uploaded_file($aFiles['tmp_name'], $sNewFilePath);
			$aFile = NULL;
			$resultFile = '/uploads/' . $folder . '/' . $fileUpload;
			if (!empty($rotateAngel) && 0 !== (int)$rotateAngel) {
				$this->updateRotateImage($resultFile, $rotateAngel);
			}
			
			return $resultFile;
		}
	}

	/**
	 * Upload list images
	 * @author Harrison <harrison@likipe.se>
	 * @param array $_FILES
	 * @param string $folder Folder upload
	 * @return string fileUpload
	 */
	public function uploadListImages($aFile = array(), $folder = '', $rotateAngel = array()) {
		if (empty($aFile)) {
			return;
		}
		if ('' == trim($folder)) {
			$folder = $this->uploadDir;
		}
		
		//var_dump($aFile);exit;
		$iCountError = 0;
		$iCountSize  = 0;
		foreach ($aFile['error'] as $aFileError) {
			if ($aFileError > 0) 
				$iCountError++ ;
		}
		foreach ($aFile['size'] as $aFileSize)
		{
			if ($aFileSize > $this->limitFileSize)
				$iCountSize++;
		}
		
		if ($iCountError == count($aFile['error']) || $iCountSize == count($aFile['size'])) {
			return;
		}
		
		$aListImages = array();
		foreach((array)$aFile['name'] as $key => $aFileName)
		{
			if(!empty($aFileName) && $this->limitFileSize >= $aFile['size'][$key])
			{
				$fileName = pathinfo($aFileName);
				$fileUpload = time('now') . '-' . $this->randomString() . '.' . $fileName['extension'];

				//Kevin - check isset folder
				$sDir = $this->uploadRoot . $folder;
				if (!file_exists($sDir)) {
					mkdir($sDir);
				}
				//echo $sDir; die();
				$sNewFilePath = $sDir . '/' . $fileUpload;
				move_uploaded_file($aFile['tmp_name'][$key], $sNewFilePath);
				//$aFile = NULL;
				$fileResult = 'uploads/' . $folder . '/' . $fileUpload;
				if (exif_imagetype($fileResult) === IMAGETYPE_JPEG) {
					$fileResult = str_replace($this->webRoot,'' ,$this->adjustPicOrientation($fileResult));
				}
				$aListImages[] = $fileResult;
				if (!empty($rotateAngel[$key]) && 0 !== (int)$rotateAngel[$key] ) {
					$this->updateRotateImage($fileResult, $rotateAngel[$key]);
				}
			}
			else {
				$aListImages[] = '';
			}
		}
		$aFile = NULL;
		return $aListImages;
	}

	/**
	 * Remove image
	 * @author Rony <rony@likipe.se>
	 * @param link $url
	 * @return bool <b>TRUE</b> on success or <b>FALSE</b> on failure.
	 */
	public function removeImage($url) {
		if (empty($url)) return false;
		$file = $this->webRoot . $url;
		if ($file && file_exists($file) && is_writable($file)) {
			return unlink($file);
		}
		return false;
	}
	
	/**
	 * Rotate Image
	 * @author Harrison <harrison@likipe.se>
	 * @param string $url
	 * @param int $rotateAngel
	 * @return boolean
	 */
	public function updateRotateImage($url, $rotateAngel, $rename = false  )
	{
		if (empty($url) || empty($rotateAngel)) {
			return false;
		}
		$fullUrl = $this->webRoot . $url;
		$extImage = strtolower(pathinfo($url, PATHINFO_EXTENSION));
		if ('png' === $extImage) {
			try {
				$source = imagecreatefrompng($fullUrl) or '';
			} catch (\Exception $exc) {
				return false;
			}

		} else {
			try {
				$source = imagecreatefromjpeg($fullUrl) or '';
			} catch (\Exception $exc) {
				return false;
			}
		}
		if (empty($source)) {
			return false;
		}
		$rotate = imagerotate($source, -$rotateAngel, 0);
		if (empty($rotate)) {
			return false;
		}
		if ($rename) {
			$oldDirectory = pathinfo($url, PATHINFO_DIRNAME);
			$newUrl = $oldDirectory . '/' . 'rotated-image-' . time('now') . '-' . $this->randomString() . '.' . $extImage;
		} else {
			$newUrl = $url;
		}
		if ('png' === $extImage) {
			try {
				imagepng($rotate, $this->webRoot . $newUrl, 9);
			} catch (\Exception $exc) {
				imagedestroy($source);
				imagedestroy($rotate);
				return false;
			}

		} else {
			try {
				imagejpeg($rotate, $this->webRoot . $newUrl, 95);
			} catch (\Exception $exc) {
				imagedestroy($source);
				imagedestroy($rotate);
				return false;
			}
		}
		if ($rename) {
			$this->removeImage($url);
		}
		imagedestroy($source);
		imagedestroy($rotate);
		
		return $newUrl;
	}
	
	/**
	 * Mirror Image by Url
	 * @author Harrison <harrison@likipe.se>
	 * @param string $imgsrc
	 * @return string
	 */
	public function _mirrorImage ($imgsrc)
	{
		$width = imagesx($imgsrc);
		$height = imagesy($imgsrc);
		$srcX = $width -1;
		$srcY = 0;
		$srcWidth = -$width;
		$srcHeight = $height;
		$imgdest = imagecreatetruecolor($width, $height);
		if (imagecopyresampled($imgdest, $imgsrc, 0, 0, $srcX, $srcY, $width, $height, $srcWidth, $srcHeight)){
			return $imgdest;
		}

		return $imgsrc;
	}
	
	/**
	 * Rotate camera image on ios
	 * @author Harrison <harrison@likipe.se>
	 * @param string $fullFilename
	 * @return string
	 */
	public function adjustPicOrientation($fullFilename){        
		$exif = exif_read_data($fullFilename);
		if($exif && isset($exif['Orientation'])) {
			$orientation = $exif['Orientation'];
			if($orientation != 1){
				$img = imagecreatefromjpeg($fullFilename);

				$mirror = false;
				$deg    = 0;

				switch ($orientation) {
				  case 2:
					$mirror = true;
					break;
				  case 3:
					$deg = 180;
					break;
				  case 4:
					$deg = 180;
					$mirror = true;  
					break;
				  case 5:
					$deg = 270;
					$mirror = true; 
					break;
				  case 6:
					$deg = 270;
					break;
				  case 7:
					$deg = 90;
					$mirror = true; 
					break;
				  case 8:
					$deg = 90;
					break;
				}
				if ($deg) {
					$img = imagerotate($img, $deg, 0); 
				}
				if ($mirror) {
					$img = _mirrorImage($img);
				}
				$this->removeImage($fullFilename);
				$fullFilename = str_replace('.jpg', "-O$orientation.jpg",  $fullFilename); 
				imagejpeg($img, $fullFilename, 95);
			}
		}
		
		return $fullFilename;
	}

}
