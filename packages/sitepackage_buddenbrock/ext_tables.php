<?php
defined('TYPO3_MODE') || die();

use \TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

ExtensionManagementUtility::addStaticFile(
    'sitepackage_buddenbrock',
    'Configuration/TypoScript',
    'Template'
);

ExtensionManagementUtility::registerPageTSConfigFile(
    'sitepackage_buddenbrock',
    'Configuration/PageTS/setup.txt',
    'Template'
);

$GLOBALS['TBE_STYLES']['stylesheet'] = 'EXT:sitepackage_buddenbrock/Resources/Public/Css/backend.min.css';

/**
 * Allow Custom Records on Standard Pages
 */
/*
 * $allowTables = [
 *     'tx_template_extra_item',
 * ];
 *
 * foreach ($allowTables as $allowTable) {
 *     ExtensionManagementUtility::allowTableOnStandardPages(
 *         $allowTable
 *     );
 * }
 */
