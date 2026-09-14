export interface ContactPerson {
  readonly name: string;
  readonly role: string;
  readonly roleArabic?: string;
  readonly phone: string;
  readonly phoneFormatted: string;
  readonly whatsapp: string;
  readonly email: string;
  readonly avatar?: string;
  readonly bio?: string;
}

export interface OfficeAddress {
  readonly building: string;
  readonly street: string;
  readonly zone: string;
  readonly floor: string;
  readonly city: string;
  readonly country: string;
  readonly countryArabic: string;
  readonly fullAddress: string;
  readonly fullAddressArabic: string;
  readonly googleMapsUrl?: string;
}

export interface CommercialRegistryDetails {
  readonly crNumber: string;
  readonly establishmentDate: string;
  readonly expiryDate: string;
  readonly capital: string;
  readonly status: "Active" | "Inactive";
  readonly legalFormEn: string;
  readonly legalFormAr: string;
  readonly nationality: string;
  readonly authority: string;
  readonly chamberMembership: string;
  readonly unifiedEconomicNo: string;
  readonly taxRegistrationNo: string;
  readonly primaryActivityCode: string;
  readonly primaryActivityEn: string;
  readonly primaryActivityAr: string;
}

export interface ServiceItem {
  readonly id: string;
  readonly title: string;
  readonly titleArabic: string;
  readonly shortDescription: string;
  readonly fullDescription: string;
  readonly iconName: string;
  readonly capabilities: readonly string[];
  readonly imageUrl: string;
}

export interface ProjectItem {
  readonly id: string;
  readonly title: string;
  readonly category: "Commercial" | "Non-Residential" | "Fit-Out" | "Civil" | "Structural";
  readonly client: string;
  readonly location: string;
  readonly completionYear: string;
  readonly scope: string;
  readonly imageUrl: string;
  readonly highlighted?: boolean;
}

export interface CompanyBrand {
  readonly nameEn: string;
  readonly nameAr: string;
  readonly shortName: string;
  readonly taglineEn: string;
  readonly taglineAr: string;
  readonly descriptionEn: string;
  readonly descriptionAr: string;
  readonly domainCandidates: readonly {
    readonly domain: string;
    readonly isPrimary: boolean;
    readonly note: string;
  }[];
  readonly activeDomain: string;
  readonly primaryEmail: string;
  readonly supportEmail: string;
  readonly careersEmail: string;
  readonly colors: {
    readonly navyDark: string;
    readonly navyLight: string;
    readonly goldAccent: string;
    readonly slateBg: string;
    readonly slateCard: string;
  };
}

export interface QualitySafetyPolicy {
  readonly title: string;
  readonly description: string;
  readonly commitments: readonly string[];
}

export interface CompanyProfile {
  readonly brand: CompanyBrand;
  readonly registry: CommercialRegistryDetails;
  readonly office: OfficeAddress;
  readonly contacts: {
    readonly businessDevelopment: ContactPerson;
    readonly operationsManager: ContactPerson;
  };
  readonly stats: readonly {
    readonly label: string;
    readonly value: string;
    readonly description: string;
  }[];
  readonly services: readonly ServiceItem[];
  readonly projects: readonly ProjectItem[];
  readonly methodology: readonly {
    readonly phaseNumber: string;
    readonly phaseName: string;
    readonly description: string;
    readonly deliverable: string;
  }[];
  readonly safetyPolicy: QualitySafetyPolicy;
  readonly qualityPolicy: QualitySafetyPolicy;
  readonly plantAndEquipment: readonly {
    readonly category: string;
    readonly items: readonly string[];
  }[];
}
