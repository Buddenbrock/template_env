<?php
defined('TYPO3_MODE') || die('Access denied.');

/**
 * Add default RTE configuration for wiw_template
 */
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['custom'] =
    'EXT:sitepackage_buddenbrock/Configuration/YAML/RTE/Custom.yaml';

/**
 * Register Icons
 */
$iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);

/**
 * In this array you can add content element names. The registration happens automaticly in the next step.
 */
$icons = [
    'text'
];
foreach ($icons as $icon) {
    $iconRegistry->registerIcon(
        'ce-' . $icon,
        \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
        ['source' => 'EXT:sitepackage_buddenbrock/Resources/Public/Icons/ContentElements/ce-' . $icon . '.svg']
    );
}



