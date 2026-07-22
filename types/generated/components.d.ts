import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAboutKitCoEk extends Struct.ComponentSchema {
  collectionName: 'components_about_about_kit_co_eks';
  info: {
    displayName: 'AboutKITCoEK';
  };
  attributes: {
    AboutUs: Schema.Attribute.Blocks;
    College_Name: Schema.Attribute.String;
    Images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Mission: Schema.Attribute.Blocks;
    Vision: Schema.Attribute.Blocks;
    VisionImg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AboutBoardMember extends Struct.ComponentSchema {
  collectionName: 'components_about_board_members';
  info: {
    displayName: 'BoardMember';
  };
  attributes: {
    designation: Schema.Attribute.String;
    personName: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images'>;
  };
}

export interface AboutChairmanMessage extends Struct.ComponentSchema {
  collectionName: 'components_about_chairman_messages';
  info: {
    displayName: 'ChairmanMessage';
  };
  attributes: {
    designation: Schema.Attribute.String;
    message: Schema.Attribute.Blocks;
    personName: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images'>;
  };
}

export interface AboutCollegeAdminMember extends Struct.ComponentSchema {
  collectionName: 'components_about_college_admin_members';
  info: {
    displayName: 'CollegeAdminMember';
  };
  attributes: {
    designation: Schema.Attribute.String;
    personName: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images'>;
  };
}

export interface AboutDirectorMessage extends Struct.ComponentSchema {
  collectionName: 'components_about_director_messages';
  info: {
    displayName: 'DirectorMessage';
  };
  attributes: {
    designation: Schema.Attribute.String;
    message: Schema.Attribute.Blocks;
    personName: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images'>;
  };
}

export interface AboutFoundersTrustees extends Struct.ComponentSchema {
  collectionName: 'components_about_founders_trustees';
  info: {
    displayName: 'FoundersTrustees';
  };
  attributes: {
    Designation: Schema.Attribute.Text;
    PersonName: Schema.Attribute.Text;
    Photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AboutGoverningCouncilMember extends Struct.ComponentSchema {
  collectionName: 'components_about_governing_council_members';
  info: {
    displayName: 'GoverningCouncilMember';
  };
  attributes: {
    designation: Schema.Attribute.Text;
    personName: Schema.Attribute.String;
    position: Schema.Attribute.Text;
    serialNo: Schema.Attribute.Integer;
  };
}

export interface AboutIqac extends Struct.ComponentSchema {
  collectionName: 'components_about_iqacs';
  info: {
    displayName: 'IQAC';
  };
  attributes: {
    introductionText: Schema.Attribute.Text;
    iqacLinks: Schema.Attribute.Component<'about.iqac-link', true>;
    naacRecords: Schema.Attribute.Component<'about.iqac-link', true>;
    ssrDocumentHref: Schema.Attribute.String;
  };
}

export interface AboutIqacLink extends Struct.ComponentSchema {
  collectionName: 'components_about_iqac_links';
  info: {
    displayName: 'IQAC Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutMilestone extends Struct.ComponentSchema {
  collectionName: 'components_about_milestones';
  info: {
    displayName: 'Milestone';
  };
  attributes: {
    description: Schema.Attribute.Text;
    year: Schema.Attribute.String;
  };
}

export interface AboutOfficeAdminMember extends Struct.ComponentSchema {
  collectionName: 'components_about_office_admin_members';
  info: {
    displayName: 'OfficeAdminMember';
  };
  attributes: {
    designation: Schema.Attribute.String;
    mobileNo: Schema.Attribute.String;
    personName: Schema.Attribute.String;
  };
}

export interface SharedAboutKitCoEk extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_kit_co_eks';
  info: {
    displayName: 'AboutKITCoEK';
  };
  attributes: {
    AboutUs: Schema.Attribute.Blocks;
    College: Schema.Attribute.String;
    Images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Mission: Schema.Attribute.Text;
    Vision: Schema.Attribute.Blocks;
    Vision_Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SharedAcademicSubject extends Struct.ComponentSchema {
  collectionName: 'components_shared_academic_subjects';
  info: {
    displayName: 'academicSubject';
  };
  attributes: {
    credits: Schema.Attribute.Integer;
    subjectCode: Schema.Attribute.String;
    subjectName: Schema.Attribute.Text;
  };
}

export interface SharedBranchwiseplacement extends Struct.ComponentSchema {
  collectionName: 'components_shared_branchwiseplacements';
  info: {
    displayName: 'branchwiseplacement';
  };
  attributes: {
    averagePackage: Schema.Attribute.Decimal;
    department: Schema.Attribute.Relation<
      'oneToOne',
      'api::department.department'
    >;
    highestPackage: Schema.Attribute.Decimal;
    totalPlaced: Schema.Attribute.Integer;
  };
}

export interface SharedHallTicketSubject extends Struct.ComponentSchema {
  collectionName: 'components_shared_hall_ticket_subjects';
  info: {
    displayName: 'hall-ticket-subject';
  };
  attributes: {
    examDate: Schema.Attribute.Date;
    ExamDay: Schema.Attribute.String;
    ExamRoom: Schema.Attribute.String;
    ExamTime: Schema.Attribute.String;
    subject: Schema.Attribute.Relation<'oneToOne', 'api::subject.subject'>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNavButtons extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_buttons';
  info: {
    displayName: 'NavButtons';
  };
  attributes: {
    action: Schema.Attribute.String;
    buttontext: Schema.Attribute.String;
  };
}

export interface SharedNavitems extends Struct.ComponentSchema {
  collectionName: 'components_shared_navitems';
  info: {
    displayName: 'Navitems';
  };
  attributes: {
    link: Schema.Attribute.String;
    subitems: Schema.Attribute.Component<'shared.subitems', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedNestedNavitem extends Struct.ComponentSchema {
  collectionName: 'components_shared_nested_navitems';
  info: {
    displayName: 'NestedNavitem';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedPlacementOfficer extends Struct.ComponentSchema {
  collectionName: 'components_shared_placement_officers';
  info: {
    displayName: 'PlacementOfficer';
  };
  attributes: {
    Email: Schema.Attribute.Text;
    Name: Schema.Attribute.String;
    Phone: Schema.Attribute.BigInteger;
    Photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Position: Schema.Attribute.String;
    TOP_Msg: Schema.Attribute.Blocks;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSubitems extends Struct.ComponentSchema {
  collectionName: 'components_shared_subitems';
  info: {
    displayName: 'subitems';
  };
  attributes: {
    link: Schema.Attribute.String;
    nestedNavitem: Schema.Attribute.Component<'shared.nested-navitem', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedSubjectResult extends Struct.ComponentSchema {
  collectionName: 'components_shared_subject_results';
  info: {
    displayName: 'subject-result';
  };
  attributes: {
    faculty: Schema.Attribute.Relation<'oneToOne', 'api::faculty.faculty'>;
    grade: Schema.Attribute.String;
    obtainedmarks: Schema.Attribute.Integer;
    passingmarks: Schema.Attribute.Integer;
    percentage: Schema.Attribute.Decimal;
    resultResult: Schema.Attribute.String;
    subject: Schema.Attribute.Relation<'oneToOne', 'api::subject.subject'>;
    totalMarks: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about-kit-co-ek': AboutAboutKitCoEk;
      'about.board-member': AboutBoardMember;
      'about.chairman-message': AboutChairmanMessage;
      'about.college-admin-member': AboutCollegeAdminMember;
      'about.director-message': AboutDirectorMessage;
      'about.founders-trustees': AboutFoundersTrustees;
      'about.governing-council-member': AboutGoverningCouncilMember;
      'about.iqac': AboutIqac;
      'about.iqac-link': AboutIqacLink;
      'about.milestone': AboutMilestone;
      'about.office-admin-member': AboutOfficeAdminMember;
      'shared.about-kit-co-ek': SharedAboutKitCoEk;
      'shared.academic-subject': SharedAcademicSubject;
      'shared.branchwiseplacement': SharedBranchwiseplacement;
      'shared.hall-ticket-subject': SharedHallTicketSubject;
      'shared.media': SharedMedia;
      'shared.nav-buttons': SharedNavButtons;
      'shared.navitems': SharedNavitems;
      'shared.nested-navitem': SharedNestedNavitem;
      'shared.placement-officer': SharedPlacementOfficer;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.subitems': SharedSubitems;
      'shared.subject-result': SharedSubjectResult;
    }
  }
}
