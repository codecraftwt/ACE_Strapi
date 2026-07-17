import type { Schema, Struct } from '@strapi/strapi';

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
      'shared.academic-subject': SharedAcademicSubject;
      'shared.branchwiseplacement': SharedBranchwiseplacement;
      'shared.media': SharedMedia;
      'shared.placement-officer': SharedPlacementOfficer;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.subject-result': SharedSubjectResult;
    }
  }
}
