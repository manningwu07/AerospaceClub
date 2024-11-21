// Modify the datastructure to match the website

// Disclaimers
// DO NOT USE ARRAYS, IF YOU NEED TO, MAKE THE ELEMENTS OBJECTS WITH 1 ATTRBUTES {"paragraph": "insert_text"}[]
// THIS DOES NOT AFFECT NAVBAR/FOOTER ITEMS
// DOES NOT MOBILE DESIGN ADAPT

// Other helpful things
// src, imageSrc will prompt image uploading
// Links are manually made in the pages (set <Link href ={item.link}>content</Link>)
// It may not render for you when u check it out on the main; thats cuz theres caches. Just trust it works C:
// Updated DataStructure Interface
export interface DataStructure {
  global: {
    joinUs: {
      heading: string;
      description: string;
      buttonText: string;
    };
    aboutUs: {
      clubPhotoSrc: string;
      heading: string;
      description: string;
      ambitionsTitle: string;
      ambitions: {
        icon: string;
        title: string;
        description: string;
      }[];
      comment: string;
    };
    events: {
      id: number;
      date: string;
      title: string;
      time: string;
      location: string;
      description: string;
      imageSrc: string;
    }[];
  };
  landing: {
    frontPage: {
      heading: string;
      description: string;
    };
  };
  academy: {
    courseSections: {
      title: string;
      description: string;
      imageSrc: string;
      isReversed: boolean;
    }[];
    testimonials: {
      quote: string;
      author: string;
    }[];
  }
  about: {
    boardMembers: {
      id: number;
      name: string;
      role: string;
      description: string;
      imageSrc: string;
    }[];
  };
  teams: {
    name: string;
    lead: string;
    description: string;
    icon: string;
    imageSrc: string;
    iconColor: string;
  }[];
}
