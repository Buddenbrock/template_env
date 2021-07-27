<?php

/**
 * Extension Manager/Repository config file for ext sitepackage_buddenbrock
 */

$EM_CONF['sitepackage_buddenbrock'] = [
    'title' => 'Buddenbrock Template',
    'description' => 'Templates for buddenbrock.de',
    'category' => 'template',
    'constraints' => [
        'depends' => [
            'typo3' => '9.5.0-10.4.99',
        ],
    ],
    'state' => 'stable',
    'clearCacheOnLoad' => 1,
    'author' => 'Dirk Buddenbrock',
    'author_email' => 'git@dirk-buddenbrock.de',
    'author_company' => '',
    'version' => '1.0.0',
];
