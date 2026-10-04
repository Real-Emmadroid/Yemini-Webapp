export type PageRoute = 
  | 'home'
  | 'mobile'
  | 'desktop'
  | 'ai'
  | 'download'
  | 'docs'
  | 'resources'
  | 'about'
  | 'security'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'cookies'
  | 'acceptable-use'
  | 'licenses'
  | 'delete-account'
  | 'account-deletion'
  | 'editorapp-privacy'
  | 'notepadapp-privacy'
  | 'converterapp-privacy'
  | 'shareapp-privacy'
  | 'apitesterapp-privacy'
  | 'dbmsapp-privacy'
  | 'imageeditorapp-privacy'
  | 'app-privacy'
  | 'mobile-privacy';

export interface ProductFeature {
  title: string;
  description: string;
  badge?: string;
}

export interface ProductInfo {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  status: 'available' | 'beta' | 'coming-soon';
  platform: string;
  ctaText: string;
  route: PageRoute;
  features: ProductFeature[];
  specs: { label: string; value: string }[];
}

export interface PlatformDownload {
  id: 'android' | 'windows' | 'macos' | 'linux';
  name: string;
  subtitle: string;
  category: 'mobile' | 'desktop';
  version: string;
  releaseDate: string;
  status: 'available' | 'coming-soon';
  fileSize: string;
  packageType: string;
  downloadLabel: string;
  downloadUrl?: string;
  sha256: string;
  requirements: string[];
  installSteps: string[];
  supportedArchitectures: string[];
}

export interface DocSection {
  id: string;
  title: string;
  items: {
    id: string;
    title: string;
    badge?: string;
  }[];
}

export interface DocArticle {
  id: string;
  title: string;
  sectionId: string;
  category: string;
  lastUpdated: string;
  summary: string;
  content: {
    heading: string;
    text: string;
    code?: {
      language: string;
      code: string;
      caption?: string;
    };
    callout?: {
      type: 'info' | 'warning' | 'tip';
      title: string;
      text: string;
    };
    list?: string[];
  }[];
  relatedDocIds?: string[];
}

export interface ResourcePost {
  id: string;
  title: string;
  type: 'announcement' | 'blog' | 'guide' | 'tutorial';
  author: {
    name: string;
    role: string;
    avatarInitials: string;
  };
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  content: string[];
}

export interface ChangelogRelease {
  version: string;
  date: string;
  badge?: string;
  summary: string;
  highlights: string[];
  changes: {
    category: 'Added' | 'Changed' | 'Fixed' | 'Security';
    items: string[];
  }[];
}

export interface LegalDocument {
  id: string;
  title: string;
  lastUpdated: string;
  description: string;
  sections: {
    title: string;
    paragraphs: string[];
    bulletPoints?: string[];
  }[];
}

export interface SearchResultItem {
  id: string;
  title: string;
  description: string;
  category: 'Product' | 'Docs' | 'Download' | 'Resource' | 'Legal';
  route: PageRoute;
  targetId?: string;
}
