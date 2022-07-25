/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [
  //   {
  //     type: 'autogenerated', 
  //     dirName: '.'
  //   }
  // ],

  // But you can create a sidebar manually
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Дуудлагатай холбоотой',
      items: [
        'duudlaga/call-list',
        'duudlaga/call-report',
        'duudlaga/connect-report',
        'duudlaga/operator-call',
        'duudlaga/callback',
        'duudlaga/work-management',
        'duudlaga/work-report'
      ],
    },
    {
      type: 'category',
      label: 'Мэдлэгийн сан',
      items: [
        'knowledgebase/knowledgebase-management',
        'knowledgebase/knowledgebase-report'
      ],
    },
    {
      type: 'category',
      label: 'Масс смс, мэйл',
      items: [
        'sms-mail/connect-sms-mail',
        'sms-mail/mass-sms-mail',
        'sms-mail/sms-mail-list',
        'sms-mail/zahialgat-uilchilgee'
      ],
    },
    {
      type: 'category',
      label: 'Tech Alert',
      items: [
        'tech-alert/send-notification',
        'tech-alert/work-notif-list',
        'tech-alert/org-notif-list'
      ],
    },
    {
      type: 'category',
      label: 'Гомдол',
      items: [
        'gomdol/gomdol-list',
        'gomdol/gomdol-option',
        'gomdol/gomdol-end',
        'gomdol/gomdol-report',
        'gomdol/huvaarilagdsan-gomdol',
        'gomdol/salbar-gomdol',
        'gomdol/process-copy'
      ],
    },
    {
      type: 'category',
      label: 'Ерөнхий тохиргоо',
      items: [
        'general/phonebook',
        'general/org',
        'general/member-management',
        'general/member-option',
        'general/master-data',
        'general/group',
        'general/join-org',
        'general/org-wallet',
        'general/dynamic-talbar',
        'general/movement-news',
        'general/invoice'
      ],
    },
    {
      type: 'category',
      label: 'Чат',
      items: [
        'chat/chat',
        'chat/chat-type',
        'chat/chat-history'
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Хяналтын самбар',
    //   items: ['tutorial-basics/'],
    // },
    // {
    //   type: 'category',
    //   label: 'Утсан борлуулалт',
    //   items: ['tutorial-basics/'],
    // },
    // {
    //   type: 'category',
    //   label: 'Утсан борлуулалтын тайлан',
    //   items: ['tutorial-basics/'],
    // },
    // {
    //   type: 'category',
    //   label: 'Зээл цуглуулах',
    //   items: ['tutorial-basics/'],
    // },
    // {
    //   type: 'category',
    //   label: 'Видео дуудлага',
    //   items: ['tutorial-basics/'],
    // },
  ],
};

module.exports = sidebars;
