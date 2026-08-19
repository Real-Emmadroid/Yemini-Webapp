export type PageRoute = 
  | 'home'
  | 'mobile'
  | 'desktop'
  | 'ai'
  | 'extensions'
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
  | 'licenses';

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

export type ExtensionCategory = 
  | 'all'
  | 'languages'
  | 'developer-tools'
  | 'themes'
  | 'debugging'
  | 'formatting'
  | 'linters';

export interface ExtensionItem {
  id: string;
  name: string;
  displayName: string;
  category: ExtensionCategory;
  version: string;
  size: string;
  publisher: string;
  verified: boolean;
  shortDescription: string;
  longDescription: string;
  compatibility: ('Mobile' | 'Desktop')[];
  iconName: string;
  rating: number;
  downloads: string;
  tags: string[];
  features: string[];
  command: string;
  lastUpdated: string;
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
  category: 'Product' | 'Extension' | 'Docs' | 'Download' | 'Resource' | 'Legal';
  route: PageRoute;
  targetId?: string;
}
