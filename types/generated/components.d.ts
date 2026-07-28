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

export interface AboutAccreditation extends Struct.ComponentSchema {
  collectionName: 'components_about_accreditations';
  info: {
    displayName: 'Accreditation';
  };
  attributes: {
    aicteApproval: Schema.Attribute.Component<'about.aicte-approval', true>;
    nbaNaac: Schema.Attribute.Component<'about.nba-naac', true>;
  };
}

export interface AboutAicteApproval extends Struct.ComponentSchema {
  collectionName: 'components_about_aicte_approvals';
  info: {
    displayName: 'AICTE Approval';
  };
  attributes: {
    academicYear: Schema.Attribute.String & Schema.Attribute.Required;
    downloadDocument: Schema.Attribute.String & Schema.Attribute.Required;
    serialNo: Schema.Attribute.Integer;
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

export interface AboutFacultyList extends Struct.ComponentSchema {
  collectionName: 'components_about_faculty_lists';
  info: {
    displayName: 'Faculty List';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
    iqacCommitteeMembers: Schema.Attribute.Component<
      'about.iqac-committee-member',
      true
    >;
    iqacLinks: Schema.Attribute.Component<'about.iqac-link', true>;
    naacRecords: Schema.Attribute.Component<'about.iqac-link', true>;
  };
}

export interface AboutIqacCommitteeMember extends Struct.ComponentSchema {
  collectionName: 'components_about_iqac_committee_members';
  info: {
    displayName: 'IQAC Committee Member';
    icon: 'user';
  };
  attributes: {
    designation: Schema.Attribute.Text & Schema.Attribute.Required;
    personName: Schema.Attribute.String & Schema.Attribute.Required;
    position: Schema.Attribute.String & Schema.Attribute.Required;
    serialNo: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface AboutIqacFiledata extends Struct.ComponentSchema {
  collectionName: 'components_about_iqac_filedata';
  info: {
    displayName: 'IQAC_Filedata';
  };
  attributes: {
    File_Name: Schema.Attribute.Text;
    Link: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface AboutIqacLink extends Struct.ComponentSchema {
  collectionName: 'components_about_iqac_links';
  info: {
    displayName: 'IQAC Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    IQAC_file: Schema.Attribute.Component<'about.iqac-filedata', true>;
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

export interface AboutNbaNaac extends Struct.ComponentSchema {
  collectionName: 'components_about_nba_naacs';
  info: {
    displayName: 'NBA NAAC';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutNirfCategory extends Struct.ComponentSchema {
  collectionName: 'components_about_nirf_categories';
  info: {
    displayName: 'NIRF Category';
    icon: 'folder';
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.Enumeration<['NIRF', 'IPR', 'Paper Publication']> &
      Schema.Attribute.Required;
    yearGroups: Schema.Attribute.Component<'about.nirf-year', true>;
  };
}

export interface AboutNirfDocument extends Struct.ComponentSchema {
  collectionName: 'components_about_nirf_documents';
  info: {
    displayName: 'NIRF Document';
    icon: 'file';
  };
  attributes: {
    href: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutNirfDocuments extends Struct.ComponentSchema {
  collectionName: 'components_about_nirf_documents_containers';
  info: {
    displayName: 'NIRF Documents';
    icon: 'folder-open';
  };
  attributes: {
    categories: Schema.Attribute.Component<'about.nirf-category', true>;
  };
}

export interface AboutNirfYear extends Struct.ComponentSchema {
  collectionName: 'components_about_nirf_years';
  info: {
    displayName: 'NIRF Year';
    icon: 'calendar';
  };
  attributes: {
    documents: Schema.Attribute.Component<'about.nirf-document', true>;
    year: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface AcademicCalenderAcademicCalender
  extends Struct.ComponentSchema {
  collectionName: 'components_academic_calender_academic_calenders';
  info: {
    displayName: 'Academic Calender';
  };
  attributes: {
    yeargroup: Schema.Attribute.Component<'academic-calender.year-group', true>;
  };
}

export interface AcademicCalenderEvents extends Struct.ComponentSchema {
  collectionName: 'components_academic_calender_events';
  info: {
    displayName: 'Events';
  };
  attributes: {
    Link: Schema.Attribute.Text;
    Tilte: Schema.Attribute.String;
  };
}

export interface AcademicCalenderYearGroup extends Struct.ComponentSchema {
  collectionName: 'components_academic_calender_year_groups';
  info: {
    displayName: 'Year Group';
  };
  attributes: {
    Events: Schema.Attribute.Component<'academic-calender.events', true>;
    title: Schema.Attribute.String;
  };
}

export interface AcademicsClubItem extends Struct.ComponentSchema {
  collectionName: 'components_academics_club_items';
  info: {
    displayName: 'club-item';
    icon: 'hashtag';
  };
  attributes: {
    clubName: Schema.Attribute.String & Schema.Attribute.Required;
    documentPath: Schema.Attribute.Text;
    serialNo: Schema.Attribute.Integer;
  };
}

export interface AcademicsClubYear extends Struct.ComponentSchema {
  collectionName: 'components_academics_club_years';
  info: {
    displayName: 'club-year';
    icon: 'calendar';
  };
  attributes: {
    academicYear: Schema.Attribute.String & Schema.Attribute.Required;
    clubs: Schema.Attribute.Component<'academics.club-item', true>;
  };
}

export interface AcademicsInternshipPolicy extends Struct.ComponentSchema {
  collectionName: 'components_academics_internship_policies';
  info: {
    displayName: 'Internship Policy';
  };
  attributes: {
    intershipData: Schema.Attribute.Component<
      'intership-policy.intership-files',
      true
    >;
  };
}

export interface AcademicsOnlineSyllabus extends Struct.ComponentSchema {
  collectionName: 'components_academics_online_syllabi';
  info: {
    displayName: 'Online Syllabus';
  };
  attributes: {
    AcademicLevel: Schema.Attribute.Enumeration<['B.Tech', 'M.Tech']>;
    AcademicYear: Schema.Attribute.Enumeration<
      ['First Year', 'Second Year', 'Third Year', 'Final Year']
    >;
    branchs: Schema.Attribute.Component<'online-syllabus.branch', true>;
    Sceme: Schema.Attribute.String;
  };
}

export interface AcademicsPolicyDocuments extends Struct.ComponentSchema {
  collectionName: 'components_academics_policy_documents';
  info: {
    displayName: 'Policy Documents';
  };
  attributes: {
    Link: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AcademicsRulesAndRegulations extends Struct.ComponentSchema {
  collectionName: 'components_academics_rules_and_regulations';
  info: {
    displayName: 'Rules and Regulations';
  };
  attributes: {
    Link: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AcademicsStudentClub extends Struct.ComponentSchema {
  collectionName: 'components_academics_student_clubs';
  info: {
    displayName: 'student-club';
    icon: 'users';
  };
  attributes: {
    aboutDescription: Schema.Attribute.Text;
    yearGroups: Schema.Attribute.Component<'academics.club-year', true>;
  };
}

export interface AdmissionAcademicYear extends Struct.ComponentSchema {
  collectionName: 'components_admission_academic_years';
  info: {
    displayName: 'Academic Year';
  };
  attributes: {
    tabs: Schema.Attribute.Component<'admission.admission-tab', true>;
    year: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AdmissionAdmissionTab extends Struct.ComponentSchema {
  collectionName: 'components_admission_admission_tabs';
  info: {
    displayName: 'Admission Tab';
  };
  attributes: {
    documents: Schema.Attribute.Component<'admission.document-item', true>;
    tabName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AdmissionContactEntry extends Struct.ComponentSchema {
  collectionName: 'components_admission_contact_entries';
  info: {
    displayName: 'Contact Entry';
  };
  attributes: {
    department: Schema.Attribute.String & Schema.Attribute.Required;
    faculties: Schema.Attribute.Component<'admission.faculty-contact', true>;
  };
}

export interface AdmissionContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_admission_contact_infos';
  info: {
    displayName: 'Contact Info';
  };
  attributes: {
    contacts: Schema.Attribute.Component<'admission.contact-entry', true>;
  };
}

export interface AdmissionCourse extends Struct.ComponentSchema {
  collectionName: 'components_admission_courses';
  info: {
    displayName: 'Course';
  };
  attributes: {
    courseDescription: Schema.Attribute.String;
    courseName: Schema.Attribute.String & Schema.Attribute.Required;
    generalCode: Schema.Attribute.String;
    generalIntake: Schema.Attribute.Integer;
    tfwsCode: Schema.Attribute.String;
    tfwsIntake: Schema.Attribute.Integer;
  };
}

export interface AdmissionDocumentItem extends Struct.ComponentSchema {
  collectionName: 'components_admission_document_items';
  info: {
    displayName: 'Document Item';
  };
  attributes: {
    documentLink: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AdmissionFacultyContact extends Struct.ComponentSchema {
  collectionName: 'components_admission_faculty_contacts';
  info: {
    displayName: 'Faculty Contact';
  };
  attributes: {
    designation: Schema.Attribute.String;
    mobile: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AdmissionInstituteCode extends Struct.ComponentSchema {
  collectionName: 'components_admission_institute_codes';
  info: {
    displayName: 'Institute Code';
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Required;
    courses: Schema.Attribute.Component<'admission.course', true>;
  };
}

export interface AdmissionPhdAdmission extends Struct.ComponentSchema {
  collectionName: 'components_admission_phd_admissions';
  info: {
    displayName: 'PhD Admission';
    icon: 'file';
  };
  attributes: {
    items: Schema.Attribute.Component<'admission.phd-admission-item', true>;
  };
}

export interface AdmissionPhdAdmissionItem extends Struct.ComponentSchema {
  collectionName: 'components_admission_phd_admission_items';
  info: {
    displayName: 'PhD Admission Item';
    icon: 'file';
  };
  attributes: {
    formLink: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AdmissionPhdGuide extends Struct.ComponentSchema {
  collectionName: 'components_admission_phd_guides';
  info: {
    displayName: 'PhD Guide';
    icon: 'user';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    srNo: Schema.Attribute.Integer;
  };
}

export interface AdmissionPhdProgram extends Struct.ComponentSchema {
  collectionName: 'components_admission_phd_programs';
  info: {
    displayName: 'PhD Program';
    icon: 'book';
  };
  attributes: {
    phdAdmission: Schema.Attribute.Component<'admission.phd-admission', false>;
    researchCenters: Schema.Attribute.Component<
      'admission.phd-research-center',
      true
    >;
    rulesAndRegulation: Schema.Attribute.Component<
      'admission.phd-rules-and-regulation',
      false
    >;
  };
}

export interface AdmissionPhdResearchCenter extends Struct.ComponentSchema {
  collectionName: 'components_admission_phd_research_centers';
  info: {
    displayName: 'PhD Research Center';
    icon: 'building';
  };
  attributes: {
    centerName: Schema.Attribute.String & Schema.Attribute.Required;
    documentLink: Schema.Attribute.String;
    guides: Schema.Attribute.Component<'admission.phd-guide', true>;
  };
}

export interface AdmissionPhdRulesAndRegulation extends Struct.ComponentSchema {
  collectionName: 'components_admission_phd_rules_and_regulations';
  info: {
    displayName: 'PhD Rules And Regulation';
    icon: 'file';
  };
  attributes: {
    items: Schema.Attribute.Component<'admission.phd-rules-item', true>;
  };
}

export interface AdmissionPhdRulesItem extends Struct.ComponentSchema {
  collectionName: 'components_admission_phd_rules_items';
  info: {
    displayName: 'PhD Rules Item';
    icon: 'file';
  };
  attributes: {
    fileLink: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AdmissionPostGraduate extends Struct.ComponentSchema {
  collectionName: 'components_admission_post_graduates';
  info: {
    displayName: 'Post Graduate';
    icon: 'book';
  };
  attributes: {
    academicYears: Schema.Attribute.Component<'admission.academic-year', true>;
    instituteCode: Schema.Attribute.Component<
      'admission.post-graduate-institute-code',
      false
    >;
  };
}

export interface AdmissionPostGraduateCourse extends Struct.ComponentSchema {
  collectionName: 'components_admission_post_graduate_courses';
  info: {
    displayName: 'Post Graduate Course';
    icon: 'book';
  };
  attributes: {
    code: Schema.Attribute.String;
    courseName: Schema.Attribute.String & Schema.Attribute.Required;
    intake: Schema.Attribute.Integer;
  };
}

export interface AdmissionPostGraduateInstituteCode
  extends Struct.ComponentSchema {
  collectionName: 'components_admission_post_graduate_institute_codes';
  info: {
    displayName: 'Post Graduate Institute Code';
    icon: 'code';
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Required;
    courses: Schema.Attribute.Component<'admission.post-graduate-course', true>;
  };
}

export interface AdmissionScholarship extends Struct.ComponentSchema {
  collectionName: 'components_admission_scholarships';
  info: {
    displayName: 'Scholarship';
    icon: 'award';
  };
  attributes: {
    banner: Schema.Attribute.Media<'images', true>;
    entries: Schema.Attribute.Component<'admission.scholarship-entry', true>;
    title: Schema.Attribute.String;
  };
}

export interface AdmissionScholarshipEntry extends Struct.ComponentSchema {
  collectionName: 'components_admission_scholarship_entries';
  info: {
    displayName: 'Scholarship Entry';
    icon: 'list';
  };
  attributes: {
    amountSanction: Schema.Attribute.Text;
    category: Schema.Attribute.String;
    incomeLimit: Schema.Attribute.String;
    srNo: Schema.Attribute.Integer;
    type: Schema.Attribute.String;
  };
}

export interface AdmissionUndergraduate extends Struct.ComponentSchema {
  collectionName: 'components_admission_undergraduates';
  info: {
    displayName: 'Undergraduate';
    icon: 'book';
  };
  attributes: {
    academicYears: Schema.Attribute.Component<'admission.academic-year', true>;
  };
}

export interface AdmissionVocationalBimTechnology
  extends Struct.ComponentSchema {
  collectionName: 'components_admission_vocational_bim_technologies';
  info: {
    displayName: 'Vocational BIM Technology';
    icon: 'building';
  };
  attributes: {
    about: Schema.Attribute.Text;
    badge: Schema.Attribute.String;
    capacity: Schema.Attribute.String;
    courses: Schema.Attribute.Component<
      'admission.vocational-course-item',
      true
    >;
    courseSchedule: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    duration: Schema.Attribute.String;
    eligibility: Schema.Attribute.Text;
    enrollmentProcedure: Schema.Attribute.Component<
      'admission.vocational-enrollment-procedure',
      false
    >;
    seats: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    tagline: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    whyChooseBim: Schema.Attribute.Component<
      'admission.vocational-why-choose-bim',
      false
    >;
  };
}

export interface AdmissionVocationalCourseItem extends Struct.ComponentSchema {
  collectionName: 'components_admission_vocational_course_items';
  info: {
    displayName: 'Vocational Course Item';
    icon: 'book';
  };
  attributes: {
    courseName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AdmissionVocationalCourses extends Struct.ComponentSchema {
  collectionName: 'components_admission_vocational_coursess';
  info: {
    displayName: 'Vocational Courses';
    icon: 'book';
  };
  attributes: {
    bimTechnology: Schema.Attribute.Component<
      'admission.vocational-bim-technology',
      false
    >;
    poster: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface AdmissionVocationalEnrollmentProcedure
  extends Struct.ComponentSchema {
  collectionName: 'components_admission_vocational_enrollment_procedures';
  info: {
    displayName: 'Vocational Enrollment Procedure';
    icon: 'clipboard';
  };
  attributes: {
    steps: Schema.Attribute.Component<
      'admission.vocational-enrollment-step',
      true
    >;
  };
}

export interface AdmissionVocationalEnrollmentStep
  extends Struct.ComponentSchema {
  collectionName: 'components_admission_vocational_enrollment_steps';
  info: {
    displayName: 'Vocational Enrollment Step';
    icon: 'list';
  };
  attributes: {
    instruction: Schema.Attribute.Text & Schema.Attribute.Required;
    stepNumber: Schema.Attribute.Integer;
  };
}

export interface AdmissionVocationalSkillGap extends Struct.ComponentSchema {
  collectionName: 'components_admission_vocational_skill_gaps';
  info: {
    displayName: 'Vocational Skill Gap';
    icon: 'chartBar';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    trade: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AdmissionVocationalWhyChooseBim
  extends Struct.ComponentSchema {
  collectionName: 'components_admission_vocational_why_choose_bims';
  info: {
    displayName: 'Vocational Why Choose BIM';
    icon: 'star';
  };
  attributes: {
    ariiaFramework: Schema.Attribute.Text;
    marketReport: Schema.Attribute.Text;
    placementMechanism: Schema.Attribute.Text;
    skillGaps: Schema.Attribute.Component<
      'admission.vocational-skill-gap',
      true
    >;
  };
}

export interface DepartmentCareerPerspective extends Struct.ComponentSchema {
  collectionName: 'components_department_career_perspectives';
  info: {
    displayName: 'CareerPerspective';
  };
  attributes: {
    desciption: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface DepartmentQuickLinks extends Struct.ComponentSchema {
  collectionName: 'components_department_quick_links';
  info: {
    displayName: 'quickLinks';
  };
  attributes: {
    Link: Schema.Attribute.String;
    Name: Schema.Attribute.String;
    subQuickLinks: Schema.Attribute.Component<
      'department.sub-quick-links',
      true
    >;
  };
}

export interface DepartmentSubQuickLinks extends Struct.ComponentSchema {
  collectionName: 'components_department_sub_quick_links';
  info: {
    displayName: 'subQuickLinks';
  };
  attributes: {
    Link: Schema.Attribute.Text;
    Name: Schema.Attribute.String;
  };
}

export interface ExamCellExamCalFileData extends Struct.ComponentSchema {
  collectionName: 'components_exam_cell_exam_cal_file_data';
  info: {
    displayName: 'examCal-FileData';
  };
  attributes: {
    Link: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface ExamCellExamCalYearGroup extends Struct.ComponentSchema {
  collectionName: 'components_exam_cell_exam_cal_year_groups';
  info: {
    displayName: 'examCalYearGroup';
  };
  attributes: {
    Filedata: Schema.Attribute.Component<'exam-cell.exam-cal-file-data', true>;
    Year: Schema.Attribute.String;
  };
}

export interface ExamCellExamCalendar extends Struct.ComponentSchema {
  collectionName: 'components_exam_cell_exam_calendars';
  info: {
    displayName: 'ExamCalendar';
  };
  attributes: {
    YearGroup: Schema.Attribute.Component<
      'exam-cell.exam-cal-year-group',
      true
    >;
  };
}

export interface ExamCellExamNotice extends Struct.ComponentSchema {
  collectionName: 'components_exam_cell_exam_notice';
  info: {
    description: 'Exam cell notice entry';
    displayName: 'Exam Notice';
  };
  attributes: {
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Text;
    fileUrl: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ExamCellExamResults extends Struct.ComponentSchema {
  collectionName: 'components_exam_cell_exam_results';
  info: {
    description: 'Exam cell result entry';
    displayName: 'Exam Results';
  };
  attributes: {
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Text;
    fileUrl: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ExamCellExamRulesRegulations extends Struct.ComponentSchema {
  collectionName: 'components_exam_cell_exam_rules_regulations';
  info: {
    displayName: 'ExamRulesRegulations';
  };
  attributes: {
    FilesData: Schema.Attribute.Component<'exam-cell.rules-files-data', true>;
  };
}

export interface ExamCellFacultyRemuneration extends Struct.ComponentSchema {
  collectionName: 'components_exam_cell_faculty_remuneration';
  info: {
    description: 'Exam cell faculty remuneration format documents';
    displayName: 'Faculty Remuneration';
  };
  attributes: {
    fileUrl: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ExamCellOldQuestionPapers extends Struct.ComponentSchema {
  collectionName: 'components_exam_cell_old_question_papers';
  info: {
    displayName: 'Old Question Papers';
  };
  attributes: {
    Link: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface ExamCellPaperSetting extends Struct.ComponentSchema {
  collectionName: 'components_exam_cell_paper_setting';
  info: {
    description: 'Exam cell paper setting documents';
    displayName: 'Paper Setting';
  };
  attributes: {
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Text;
    fileUrl: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ExamCellRulesFilesData extends Struct.ComponentSchema {
  collectionName: 'components_exam_cell_rules_files_data';
  info: {
    displayName: 'RulesFilesData';
  };
  attributes: {
    Link: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface ExamCellStaff extends Struct.ComponentSchema {
  collectionName: 'components_exam_cell_staff';
  info: {
    displayName: 'Staff';
  };
  attributes: {
    designation: Schema.Attribute.String;
    Name: Schema.Attribute.String;
    Photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ExamCellTimetable extends Struct.ComponentSchema {
  collectionName: 'components_exam_cell_timetable';
  info: {
    description: 'Exam timetable entry';
    displayName: 'Timetable';
  };
  attributes: {
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Text;
    documentUrl: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface IntershipPolicyIntershipFiles extends Struct.ComponentSchema {
  collectionName: 'components_intership_policy_intership_files';
  info: {
    displayName: 'intershipFiles';
  };
  attributes: {
    Link: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface OnlineSyllabusBranch extends Struct.ComponentSchema {
  collectionName: 'components_online_syllabus_branches';
  info: {
    displayName: 'Branch';
  };
  attributes: {
    BranchName: Schema.Attribute.String;
    structure: Schema.Attribute.Component<'online-syllabus.strcture', true>;
    Syllabus: Schema.Attribute.Component<'online-syllabus.syllabus', true>;
  };
}

export interface OnlineSyllabusStrcture extends Struct.ComponentSchema {
  collectionName: 'components_online_syllabus_strctures';
  info: {
    displayName: 'strcture';
  };
  attributes: {
    Link: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface OnlineSyllabusSyllabus extends Struct.ComponentSchema {
  collectionName: 'components_online_syllabus_syllabi';
  info: {
    displayName: 'Syllabus';
  };
  attributes: {
    Link: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface PlacementBranchWisePlacement extends Struct.ComponentSchema {
  collectionName: 'components_placement_branch_wise_placement';
  info: {
    description: 'Branch wise placement data';
    displayName: 'BranchWisePlacement';
  };
  attributes: {
    branch: Schema.Attribute.String & Schema.Attribute.Required;
    year_2023_24: Schema.Attribute.String;
    year_2024_25: Schema.Attribute.String;
    year_2025_26: Schema.Attribute.String;
  };
}

export interface PlacementPlacementFaculty extends Struct.ComponentSchema {
  collectionName: 'components_placement_placement_faculties';
  info: {
    displayName: 'PlacementFaculty';
  };
  attributes: {
    desiganation: Schema.Attribute.String;
    facultyName: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PlacementYearlyPlacementData extends Struct.ComponentSchema {
  collectionName: 'components_placement_yearly_placement_data';
  info: {
    displayName: 'YearlyPlacementData';
  };
  attributes: {
    AvgPackage: Schema.Attribute.String;
    HeightestPayPackage: Schema.Attribute.String;
    NumberOfCompanies: Schema.Attribute.String;
    totJobOffers: Schema.Attribute.String;
    Year: Schema.Attribute.String;
  };
}

export interface ResearchDevelopmentData extends Struct.ComponentSchema {
  collectionName: 'components_research_development_data';
  info: {
    displayName: 'data';
  };
  attributes: {
    Link: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ResearchDevelopmentResearchDevelopment
  extends Struct.ComponentSchema {
  collectionName: 'components_research_development_research_developments';
  info: {
    displayName: 'ResearchDevelopment';
  };
  attributes: {
    Files: Schema.Attribute.Component<
      'research-development.researchdata',
      true
    >;
  };
}

export interface ResearchDevelopmentResearchdata
  extends Struct.ComponentSchema {
  collectionName: 'components_research_development_researchdata';
  info: {
    displayName: 'Researchdata';
  };
  attributes: {
    Link: Schema.Attribute.Text;
    title: Schema.Attribute.String;
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
      'about.accreditation': AboutAccreditation;
      'about.aicte-approval': AboutAicteApproval;
      'about.board-member': AboutBoardMember;
      'about.chairman-message': AboutChairmanMessage;
      'about.college-admin-member': AboutCollegeAdminMember;
      'about.director-message': AboutDirectorMessage;
      'about.faculty-list': AboutFacultyList;
      'about.founders-trustees': AboutFoundersTrustees;
      'about.governing-council-member': AboutGoverningCouncilMember;
      'about.iqac': AboutIqac;
      'about.iqac-committee-member': AboutIqacCommitteeMember;
      'about.iqac-filedata': AboutIqacFiledata;
      'about.iqac-link': AboutIqacLink;
      'about.milestone': AboutMilestone;
      'about.nba-naac': AboutNbaNaac;
      'about.nirf-category': AboutNirfCategory;
      'about.nirf-document': AboutNirfDocument;
      'about.nirf-documents': AboutNirfDocuments;
      'about.nirf-year': AboutNirfYear;
      'about.office-admin-member': AboutOfficeAdminMember;
      'academic-calender.academic-calender': AcademicCalenderAcademicCalender;
      'academic-calender.events': AcademicCalenderEvents;
      'academic-calender.year-group': AcademicCalenderYearGroup;
      'academics.club-item': AcademicsClubItem;
      'academics.club-year': AcademicsClubYear;
      'academics.internship-policy': AcademicsInternshipPolicy;
      'academics.online-syllabus': AcademicsOnlineSyllabus;
      'academics.policy-documents': AcademicsPolicyDocuments;
      'academics.rules-and-regulations': AcademicsRulesAndRegulations;
      'academics.student-club': AcademicsStudentClub;
      'admission.academic-year': AdmissionAcademicYear;
      'admission.admission-tab': AdmissionAdmissionTab;
      'admission.contact-entry': AdmissionContactEntry;
      'admission.contact-info': AdmissionContactInfo;
      'admission.course': AdmissionCourse;
      'admission.document-item': AdmissionDocumentItem;
      'admission.faculty-contact': AdmissionFacultyContact;
      'admission.institute-code': AdmissionInstituteCode;
      'admission.phd-admission': AdmissionPhdAdmission;
      'admission.phd-admission-item': AdmissionPhdAdmissionItem;
      'admission.phd-guide': AdmissionPhdGuide;
      'admission.phd-program': AdmissionPhdProgram;
      'admission.phd-research-center': AdmissionPhdResearchCenter;
      'admission.phd-rules-and-regulation': AdmissionPhdRulesAndRegulation;
      'admission.phd-rules-item': AdmissionPhdRulesItem;
      'admission.post-graduate': AdmissionPostGraduate;
      'admission.post-graduate-course': AdmissionPostGraduateCourse;
      'admission.post-graduate-institute-code': AdmissionPostGraduateInstituteCode;
      'admission.scholarship': AdmissionScholarship;
      'admission.scholarship-entry': AdmissionScholarshipEntry;
      'admission.undergraduate': AdmissionUndergraduate;
      'admission.vocational-bim-technology': AdmissionVocationalBimTechnology;
      'admission.vocational-course-item': AdmissionVocationalCourseItem;
      'admission.vocational-courses': AdmissionVocationalCourses;
      'admission.vocational-enrollment-procedure': AdmissionVocationalEnrollmentProcedure;
      'admission.vocational-enrollment-step': AdmissionVocationalEnrollmentStep;
      'admission.vocational-skill-gap': AdmissionVocationalSkillGap;
      'admission.vocational-why-choose-bim': AdmissionVocationalWhyChooseBim;
      'department.career-perspective': DepartmentCareerPerspective;
      'department.quick-links': DepartmentQuickLinks;
      'department.sub-quick-links': DepartmentSubQuickLinks;
      'exam-cell.exam-cal-file-data': ExamCellExamCalFileData;
      'exam-cell.exam-cal-year-group': ExamCellExamCalYearGroup;
      'exam-cell.exam-calendar': ExamCellExamCalendar;
      'exam-cell.exam-notice': ExamCellExamNotice;
      'exam-cell.exam-results': ExamCellExamResults;
      'exam-cell.exam-rules-regulations': ExamCellExamRulesRegulations;
      'exam-cell.faculty-remuneration': ExamCellFacultyRemuneration;
      'exam-cell.old-question-papers': ExamCellOldQuestionPapers;
      'exam-cell.paper-setting': ExamCellPaperSetting;
      'exam-cell.rules-files-data': ExamCellRulesFilesData;
      'exam-cell.staff': ExamCellStaff;
      'exam-cell.timetable': ExamCellTimetable;
      'intership-policy.intership-files': IntershipPolicyIntershipFiles;
      'online-syllabus.branch': OnlineSyllabusBranch;
      'online-syllabus.strcture': OnlineSyllabusStrcture;
      'online-syllabus.syllabus': OnlineSyllabusSyllabus;
      'placement.branch-wise-placement': PlacementBranchWisePlacement;
      'placement.placement-faculty': PlacementPlacementFaculty;
      'placement.yearly-placement-data': PlacementYearlyPlacementData;
      'research-development.data': ResearchDevelopmentData;
      'research-development.research-development': ResearchDevelopmentResearchDevelopment;
      'research-development.researchdata': ResearchDevelopmentResearchdata;
      'shared.about-kit-co-ek': SharedAboutKitCoEk;
      'shared.academic-subject': SharedAcademicSubject;
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
