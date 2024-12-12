export interface CardProps {
  id: number; 
  projectName: string;
  overView: string;
  keyFeatures: {
    [feature: string]: string;
  };
  techStack: {
    FrontEnd: string[];
    BackEnd: string[];
    Database: string[];
  };
}


export const items: CardProps[] = [
    {
      id: 1,
      projectName: "Nealy Hotel",
      overView: "Neatly Hotel is a comprehensive web application designed to streamline hotel room management and booking processes. The platform caters to two main user types: customers and hotel administrators. Customers can search for available rooms, make bookings, and manage their reservations, while hotel administrators have tools to manage room availability, bookings, and customer information efficiently. This project was developed as part of a team collaboration to demonstrate the ability to create a full-stack application with a modern tech stack, ensuring a user-friendly interface, secure authentication, and robust backend functionality.",
      keyFeatures: {
          "Search for Rooms": "Customers can search for rooms based on their preferences, such as room type, price range, and availability",
          "Room Booking" : "An intuitive booking process allows customers to select rooms, choose dates, and confirm reservations.",
          "User Authentication" : "Secure login and registration powered by Firebase Authentication to ensure data security.",
          "Booking History" : "Customers can view and manage their previous and upcoming bookings.",
          "Room Management":" Hotel admins can add, update, or remove rooms and manage room details such as pricing, availability, and descriptions.",
          "Booking Overview": "Admins can monitor current bookings and customer details in real-time.",
          "User Role Management" : "Admin features include managing user permissions and roles."
      },
      techStack: {
          FrontEnd : ['React' , 'TailwindCSS' , 'Material UI' , 'Daisy UI'],
          BackEnd : ['Node' , 'Express' , 'Prisma ORM'],
          Database : ['PostgreSQL']
        }
    },
    {
      id: 2,
      projectName: "Datacenter Assistance Application",
      overView: "Developed a web application designed to help data center staff manage customer information and create daily hardware checklists. The application stores data in a database, enabling easy search and retrieval of information.",
      keyFeatures: {
        "Customer Information Management" : "Allows staff to input and access customer visit details quickly and efficiently.",
        "Daily Hardware Checklists Facilitates" : "the creation and storage of daily hardware checklists, ensuring thorough and consistent checks.",
        "Database Search Functionality Enables" : "easy and quick retrieval of information through a robust search feature."
      },
      techStack: {
          FrontEnd : ['React' , 'TailwindCSS' , 'Daisy UI'],
          BackEnd : ['Node' , 'Express' , 'Prisma ORM'],
          Database : ['PostgreSQL']
      }
      
    },
    {
      id: 3,
      projectName: "Blog Communication Platform",
      overView: "Developed a blog platform designed for users to communicate, share their favorite things, and join communities. The platform encourages interaction and engagement among users.",
      keyFeatures: {
        "Community" : "Allows users to join communities and discuss their favorite topics with friends.",
        "User-Friendly Interface" : "Built with Next.js and styled using TailwindCSS and DaisyUI for a modern and responsive design.",
        "Strong Backend" : "Strong Backend: Utilizes NestJS and MongoDB to handle data management and email or username authentication."
      },
      techStack: {
          FrontEnd : ['Next' , 'TailwindCSS' , 'Daisy UI'],
          BackEnd : ['Nest' , 'MongGoose'],
          Database : ['MongoDB']
      }
      
    },
  ];
  
  