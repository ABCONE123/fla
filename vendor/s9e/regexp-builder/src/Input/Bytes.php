<?php declare(strict_types=1);

/**
* @package   s9e\RegexpBuilder
* @copyright Copyright (c) 2016-2022 The s9e authors
* @license   http://www.opensource.org/licenses/mit-license.php The MIT License
*/
namespace s9e\RegexpBuilder\Input;

use function array_map, str_split;

class Bytes extends BaseImplementation
{
	/**
	* {@inheritdoc}
	*/
	public function split(string $string): array
	{
		if ($string === '')
		{
			return [];
		}

		return array_map('ord', str_split($string, 1));
	}
}