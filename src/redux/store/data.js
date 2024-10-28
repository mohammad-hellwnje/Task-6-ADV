import img1 from "./../../assets/image/Image1.png";
import img2 from "./../../assets/image/Image2.png";
import img3 from "./../../assets/image/Image3.png";
import img4 from "./../../assets/image/Image4.png";
import img5 from "./../../assets/image/ALL1.png";
import img6 from "./../../assets/image/ALL2.png";
import img7 from "./../../assets/image/ALL3.png";
import img8 from "./../../assets/image/ALL4.png";
import img9 from "./../../assets/image/ALL5.png";
import img10 from "./../../assets/image/ALL6.png";
import img11 from "./../../assets/image/sec-img-1.png";
import img12 from "./../../assets/image/sec-img-2.png";
import img13 from "./../../assets/image/sec-img-3.png";
import img14 from "./../../assets/image/sec-img-4.png";
import img15 from "./../../assets/image/sec-img-5.png";
import img16 from "./../../assets/image/sec-img-6.png";
import img17 from "./../../assets/image/sec-img-7.png";
import img18 from "./../../assets/image/sec-img-8.png";
import img19 from "./../../assets/image/sec-img-9.png";

const cardsData = [
  { 
    id: 1, 
    image: img5,
    subtitle: "Olivia Rhye • 1 Jan 2023", 
    title: 'UX review presentations', 
    content: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    buttons: [
      { label: 'Leadership', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor'  },
      { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2'  },
    ],
    sections: [
      {
        image: img11,
        text1:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        text: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        text2:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page",
        text3:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        text4:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns",
        text5:"Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing",
        text6:"Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid",
        tite:"Breaking Down the Grid",
        text7:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        text8:"Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        text9:"Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile",
      },
      {
        image: img12,
        text2: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
        tit:"Examples of Grids in Use",
        tit2 :"Example 1: Hierarchical Grid",
        text7:"Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right."
      },
      {
        image: img13,
        text2: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple',
        tit:"Example 2: Column Grid",
        text7:"Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides"
      },
      {
        image: img14,
        text2: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Example 3: Modular Grid",
        text7:"Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element"
      },
      {
        image: img15,
        text2: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.',
        tit:'Example 4: Breaking the Grid',
        text7:"Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it."
      },
      {
        image: img16,
        text2: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Benefits of the Grid",
        text8:"Using a grid benefits both end users and the designers alike",
        text9:"Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfacesA good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",

      },
      {
        image: img17,
        text2: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)',
        text3:'Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.',
        tit:'Choosing and Setting Up Your Grid',
        text7:'Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.',
        text8:"Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
      },
      {
        image: img18,
        text2: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
        text3:'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
      },
      {
        image: img19,
        text2: 'Content or elements should be placed within and across columns, not gutters',
        text3:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid',
        tit:'Conclusion',
        text7:'Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.',
        buttons: [
          { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
          { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
        ]
      },
      

    ]
  },
  { 
    id: 2, 
    image: img6,
    subtitle: "Olivia Rhye • 1 Jan 2023", 
    title: 'UX review presentations', 
    content: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    buttons: [
      { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
      { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2'},
      { label: 'Presentation', bgColor: 'bg-[#FDF2FA]', textColor: 'text-btncolor3' },
    ],
    sections: [
      {
        image: img19,
        text1:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        text: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        text2:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page",
        text3:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        text4:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns",
        text5:"Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing",
        text6:"Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid",
        tite:"Breaking Down the Grid",
        text7:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        text8:"Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        text9:"Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile",
      },
      {
        image: img18,
        text2: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
        tit:"Examples of Grids in Use",
        tit2 :"Example 1: Hierarchical Grid",
        text7:"Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right."
      },
      {
        image: img17,
        text2: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple',
        tit:"Example 2: Column Grid",
        text7:"Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides"
      },
      {
        image: img16,
        text2: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Example 3: Modular Grid",
        text7:"Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element"
      },
      {
        image: img15,
        text2: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.',
        tit:'Example 4: Breaking the Grid',
        text7:"Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it."
      },
      {
        image: img14,
        text2: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Benefits of the Grid",
        text8:"Using a grid benefits both end users and the designers alike",
        text9:"Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfacesA good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",

      },
      {
        image: img13,
        text2: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)',
        text3:'Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.',
        tit:'Choosing and Setting Up Your Grid',
        text7:'Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.',
        text8:"Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
      },
      {
        image: img12,
        text2: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
        text3:'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
      },
      {
        image: img11,
        text2: 'Content or elements should be placed within and across columns, not gutters',
        text3:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid',
        tit:'Conclusion',
        text7:'Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.',
        buttons: [
          { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
          { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
        ]
      },
    ]
  },
  { 
    id: 3, 
    image: img7,
    subtitle: "Olivia Rhye • 1 Jan 2023", 
    title: 'UX review presentations', 
    content: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    buttons: [
      { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
      { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
    ],
    sections: [
      {
        image: img11,
        text1:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        text: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        text2:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page",
        text3:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        text4:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns",
        text5:"Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing",
        text6:"Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid",
        tite:"Breaking Down the Grid",
        text7:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        text8:"Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        text9:"Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile",
      },
      {
        image: img12,
        text2: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
        tit:"Examples of Grids in Use",
        tit2 :"Example 1: Hierarchical Grid",
        text7:"Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right."
      },
      {
        image: img13,
        text2: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple',
        tit:"Example 2: Column Grid",
        text7:"Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides"
      },
      {
        image: img14,
        text2: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Example 3: Modular Grid",
        text7:"Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element"
      },
      {
        image: img15,
        text2: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.',
        tit:'Example 4: Breaking the Grid',
        text7:"Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it."
      },
      {
        image: img16,
        text2: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Benefits of the Grid",
        text8:"Using a grid benefits both end users and the designers alike",
        text9:"Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfacesA good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",

      },
      {
        image: img17,
        text2: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)',
        text3:'Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.',
        tit:'Choosing and Setting Up Your Grid',
        text7:'Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.',
        text8:"Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
      },
      {
        image: img18,
        text2: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
        text3:'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
      },
      {
        image: img19,
        text2: 'Content or elements should be placed within and across columns, not gutters',
        text3:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid',
        tit:'Conclusion',
        text7:'Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.',
        buttons: [
          { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
          { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
        ]
      },
    ]
  },
  { 
    id: 4, 
    image: img8,
    subtitle: "Olivia Rhye • 1 Jan 2023", 
    title: 'UX review presentations', 
    content: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    buttons: [
      { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
      { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
    ],
    sections: [
      {
        image: img19,
        text1:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        text: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        text2:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page",
        text3:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        text4:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns",
        text5:"Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing",
        text6:"Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid",
        tite:"Breaking Down the Grid",
        text7:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        text8:"Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        text9:"Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile",
      },
      {
        image: img18,
        text2: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
        tit:"Examples of Grids in Use",
        tit2 :"Example 1: Hierarchical Grid",
        text7:"Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right."
      },
      {
        image: img17,
        text2: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple',
        tit:"Example 2: Column Grid",
        text7:"Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides"
      },
      {
        image: img16,
        text2: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Example 3: Modular Grid",
        text7:"Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element"
      },
      {
        image: img15,
        text2: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.',
        tit:'Example 4: Breaking the Grid',
        text7:"Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it."
      },
      {
        image: img14,
        text2: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Benefits of the Grid",
        text8:"Using a grid benefits both end users and the designers alike",
        text9:"Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfacesA good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",

      },
      {
        image: img13,
        text2: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)',
        text3:'Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.',
        tit:'Choosing and Setting Up Your Grid',
        text7:'Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.',
        text8:"Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
      },
      {
        image: img12,
        text2: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
        text3:'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
      },
      {
        image: img11,
        text2: 'Content or elements should be placed within and across columns, not gutters',
        text3:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid',
        tit:'Conclusion',
        text7:'Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.',
        buttons: [
          { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
          { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
        ]
      },
    ]
  },
  { 
    id: 5, 
    image: img9,
    subtitle: "Olivia Rhye • 1 Jan 2023", 
    title: 'UX review presentations', 
    content: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    buttons: [
      { label: 'Software Development', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
      { label: 'Tools', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2'},
      { label: 'SaaS', bgColor: 'bg-[#FDF2FA]', textColor: 'text-btncolor3' },
    ],
    sections: [
      {
        image: img11,
        text1:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        text: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        text2:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page",
        text3:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        text4:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns",
        text5:"Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing",
        text6:"Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid",
        tite:"Breaking Down the Grid",
        text7:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        text8:"Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        text9:"Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile",
      },
      {
        image: img12,
        text2: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
        tit:"Examples of Grids in Use",
        tit2 :"Example 1: Hierarchical Grid",
        text7:"Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right."
      },
      {
        image: img13,
        text2: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple',
        tit:"Example 2: Column Grid",
        text7:"Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides"
      },
      {
        image: img14,
        text2: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Example 3: Modular Grid",
        text7:"Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element"
      },
      {
        image: img15,
        text2: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.',
        tit:'Example 4: Breaking the Grid',
        text7:"Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it."
      },
      {
        image: img16,
        text2: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Benefits of the Grid",
        text8:"Using a grid benefits both end users and the designers alike",
        text9:"Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfacesA good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",

      },
      {
        image: img17,
        text2: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)',
        text3:'Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.',
        tit:'Choosing and Setting Up Your Grid',
        text7:'Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.',
        text8:"Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
      },
      {
        image: img18,
        text2: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
        text3:'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
      },
      {
        image: img19,
        text2: 'Content or elements should be placed within and across columns, not gutters',
        text3:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid',
        tit:'Conclusion',
        text7:'Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.',
        buttons: [
          { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
          { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
        ]
      },
    ]
  },
  { 
    id: 6, 
    image: img10,
    subtitle: "Olivia Rhye • 1 Jan 2023", 
    title: 'UX review presentations', 
    content: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    buttons: [
      { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
      { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2'  },
      { label: 'Presentation', bgColor: 'bg-[#FDF2FA]', textColor: 'text-btncolor3' },
    ],
    sections: [
      {
        image: img19,
        text1:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        text: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        text2:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page",
        text3:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        text4:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns",
        text5:"Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing",
        text6:"Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid",
        tite:"Breaking Down the Grid",
        text7:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        text8:"Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        text9:"Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile",
      },
      {
        image: img18,
        text2: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
        tit:"Examples of Grids in Use",
        tit2 :"Example 1: Hierarchical Grid",
        text7:"Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right."
      },
      {
        image: img17,
        text2: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple',
        tit:"Example 2: Column Grid",
        text7:"Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides"
      },
      {
        image: img16,
        text2: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Example 3: Modular Grid",
        text7:"Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element"
      },
      {
        image: img15,
        text2: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.',
        tit:'Example 4: Breaking the Grid',
        text7:"Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it."
      },
      {
        image: img14,
        text2: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Benefits of the Grid",
        text8:"Using a grid benefits both end users and the designers alike",
        text9:"Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfacesA good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",

      },
      {
        image: img13,
        text2: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)',
        text3:'Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.',
        tit:'Choosing and Setting Up Your Grid',
        text7:'Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.',
        text8:"Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
      },
      {
        image: img12,
        text2: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
        text3:'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
      },
      {
        image: img11,
        text2: 'Content or elements should be placed within and across columns, not gutters',
        text3:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid',
        tit:'Conclusion',
        text7:'Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.',
        buttons: [
          { label: 'Podcasts', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
          { label: 'Customer Success', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
        ]
      },
    ]
  },
  { 
    id: 7, 
    image: img1,
    subtitle: "Olivia Rhye • 1 Jan 2023", 
    title: 'UX review presentations', 
    content: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    buttons: [
      { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
      { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
      { label: 'Presentation', bgColor: 'bg-[#FDF2FA]', textColor: 'text-btncolor3' },
    ],
    sections: [
      {
        image: img11,
        text1:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        text: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        text2:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page",
        text3:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        text4:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns",
        text5:"Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing",
        text6:"Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid",
        tite:"Breaking Down the Grid",
        text7:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        text8:"Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        text9:"Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile",
      },
      {
        image: img12,
        text2: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
        tit:"Examples of Grids in Use",
        tit2 :"Example 1: Hierarchical Grid",
        text7:"Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right."
      },
      {
        image: img13,
        text2: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple',
        tit:"Example 2: Column Grid",
        text7:"Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides"
      },
      {
        image: img14,
        text2: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Example 3: Modular Grid",
        text7:"Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element"
      },
      {
        image: img15,
        text2: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.',
        tit:'Example 4: Breaking the Grid',
        text7:"Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it."
      },
      {
        image: img16,
        text2: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Benefits of the Grid",
        text8:"Using a grid benefits both end users and the designers alike",
        text9:"Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfacesA good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",

      },
      {
        image: img17,
        text2: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)',
        text3:'Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.',
        tit:'Choosing and Setting Up Your Grid',
        text7:'Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.',
        text8:"Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
      },
      {
        image: img18,
        text2: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
        text3:'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
      },
      {
        image: img19,
        text2: 'Content or elements should be placed within and across columns, not gutters',
        text3:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid',
        tit:'Conclusion',
        text7:'Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.',
        buttons: [
          { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
          { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
        ]
      },
    ]
  },
  { 
    id: 8, 
    image: img2,
    subtitle: "Olivia Rhye • 1 Jan 2023", 
    title: 'UX review presentations', 
    content: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    buttons: [
      { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
      { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
      { label: 'Presentation', bgColor: 'bg-[#FDF2FA]', textColor: 'text-btncolor3' },
    ],
    sections: [
      {
        image: img11,
        text1:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        text: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        text2:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page",
        text3:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        text4:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns",
        text5:"Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing",
        text6:"Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid",
        tite:"Breaking Down the Grid",
        text7:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        text8:"Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        text9:"Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile",
      },
      {
        image: img12,
        text2: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
        tit:"Examples of Grids in Use",
        tit2 :"Example 1: Hierarchical Grid",
        text7:"Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right."
      },
      {
        image: img13,
        text2: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple',
        tit:"Example 2: Column Grid",
        text7:"Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides"
      },
      {
        image: img14,
        text2: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Example 3: Modular Grid",
        text7:"Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element"
      },
      {
        image: img15,
        text2: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.',
        tit:'Example 4: Breaking the Grid',
        text7:"Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it."
      },
      {
        image: img16,
        text2: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Benefits of the Grid",
        text8:"Using a grid benefits both end users and the designers alike",
        text9:"Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfacesA good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",

      },
      {
        image: img17,
        text2: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)',
        text3:'Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.',
        tit:'Choosing and Setting Up Your Grid',
        text7:'Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.',
        text8:"Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
      },
      {
        image: img18,
        text2: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
        text3:'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
      },
      {
        image: img19,
        text2: 'Content or elements should be placed within and across columns, not gutters',
        text3:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid',
        tit:'Conclusion',
        text7:'Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.',
        buttons: [
          { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
          { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
        ]
      },
    ]
  },
 
  { 
    id: 9, 
    image: img5,
    subtitle: "Olivia Rhye • 1 Jan 2023", 
    title: 'UX review presentations', 
    content: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    buttons: [
      { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
      { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
      { label: 'Presentation', bgColor: 'bg-[#FDF2FA]', textColor: 'text-btncolor3' },
    ],
    sections: [
      {
        image: img11,
        text1:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        text: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        text2:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page",
        text3:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        text4:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns",
        text5:"Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing",
        text6:"Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid",
        tite:"Breaking Down the Grid",
        text7:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        text8:"Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        text9:"Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile",
      },
      {
        image: img12,
        text2: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
        tit:"Examples of Grids in Use",
        tit2 :"Example 1: Hierarchical Grid",
        text7:"Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right."
      },
      {
        image: img13,
        text2: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple',
        tit:"Example 2: Column Grid",
        text7:"Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides"
      },
      {
        image: img14,
        text2: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Example 3: Modular Grid",
        text7:"Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element"
      },
      {
        image: img15,
        text2: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.',
        tit:'Example 4: Breaking the Grid',
        text7:"Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it."
      },
      {
        image: img16,
        text2: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Benefits of the Grid",
        text8:"Using a grid benefits both end users and the designers alike",
        text9:"Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfacesA good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",

      },
      {
        image: img17,
        text2: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)',
        text3:'Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.',
        tit:'Choosing and Setting Up Your Grid',
        text7:'Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.',
        text8:"Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
      },
      {
        image: img18,
        text2: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
        text3:'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
      },
      {
        image: img19,
        text2: 'Content or elements should be placed within and across columns, not gutters',
        text3:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid',
        tit:'Conclusion',
        text7:'Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.',
        buttons: [
          { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
          { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
        ]
      },
    ]
  },
  { 
    id: 10, 
    image: img6,
    subtitle: "Olivia Rhye • 1 Jan 2023", 
    title: 'UX review presentations', 
    content: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    buttons: [
      { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
      { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
      { label: 'Presentation', bgColor: 'bg-[#FDF2FA]', textColor: 'text-btncolor3' },
    ],
    sections: [
      {
        image: img11,
        text1:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        text: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        text2:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page",
        text3:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        text4:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns",
        text5:"Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing",
        text6:"Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid",
        tite:"Breaking Down the Grid",
        text7:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        text8:"Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        text9:"Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile",
      },
      {
        image: img12,
        text2: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
        tit:"Examples of Grids in Use",
        tit2 :"Example 1: Hierarchical Grid",
        text7:"Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right."
      },
      {
        image: img13,
        text2: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple',
        tit:"Example 2: Column Grid",
        text7:"Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides"
      },
      {
        image: img14,
        text2: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Example 3: Modular Grid",
        text7:"Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element"
      },
      {
        image: img15,
        text2: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.',
        tit:'Example 4: Breaking the Grid',
        text7:"Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it."
      },
      {
        image: img16,
        text2: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Benefits of the Grid",
        text8:"Using a grid benefits both end users and the designers alike",
        text9:"Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfacesA good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",

      },
      {
        image: img17,
        text2: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)',
        text3:'Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.',
        tit:'Choosing and Setting Up Your Grid',
        text7:'Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.',
        text8:"Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
      },
      {
        image: img18,
        text2: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
        text3:'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
      },
      {
        image: img19,
        text2: 'Content or elements should be placed within and across columns, not gutters',
        text3:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid',
        tit:'Conclusion',
        text7:'Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.',
        buttons: [
          { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
          { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
        ]
      },
    ]
  },
 
  { 
    id: 11, 
    image: img5,
    subtitle: "Olivia Rhye • 1 Jan 2023", 
    title: 'UX review presentations', 
    content: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    buttons: [
      { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
      { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
      { label: 'Presentation', bgColor: 'bg-[#FDF2FA]', textColor: 'text-btncolor3' },
    ],
    sections: [
      {
        image: img11,
        text1:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        text: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        text2:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page",
        text3:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        text4:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns",
        text5:"Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing",
        text6:"Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid",
        tite:"Breaking Down the Grid",
        text7:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        text8:"Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        text9:"Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile",
      },
      {
        image: img12,
        text2: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
        tit:"Examples of Grids in Use",
        tit2 :"Example 1: Hierarchical Grid",
        text7:"Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right."
      },
      {
        image: img13,
        text2: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple',
        tit:"Example 2: Column Grid",
        text7:"Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides"
      },
      {
        image: img14,
        text2: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Example 3: Modular Grid",
        text7:"Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element"
      },
      {
        image: img15,
        text2: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.',
        tit:'Example 4: Breaking the Grid',
        text7:"Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it."
      },
      {
        image: img16,
        text2: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Benefits of the Grid",
        text8:"Using a grid benefits both end users and the designers alike",
        text9:"Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfacesA good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",

      },
      {
        image: img17,
        text2: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)',
        text3:'Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.',
        tit:'Choosing and Setting Up Your Grid',
        text7:'Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.',
        text8:"Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
      },
      {
        image: img18,
        text2: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
        text3:'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
      },
      {
        image: img19,
        text2: 'Content or elements should be placed within and across columns, not gutters',
        text3:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid',
        tit:'Conclusion',
        text7:'Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.',
        buttons: [
          { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
          { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
        ]
      },
    ]
  },
  { 
    id: 12, 
    image: img6,
    subtitle: "Olivia Rhye • 1 Jan 2023", 
    title: 'UX review presentations', 
    content: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    buttons: [
      { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
      { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
      { label: 'Presentation', bgColor: 'bg-[#FDF2FA]', textColor: 'text-btncolor3' },
    ],
    sections: [
      {
        image: img11,
        text1:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        text: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        text2:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page",
        text3:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        text4:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns",
        text5:"Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing",
        text6:"Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid",
        tite:"Breaking Down the Grid",
        text7:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        text8:"Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        text9:"Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile",
      },
      {
        image: img12,
        text2: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
        tit:"Examples of Grids in Use",
        tit2 :"Example 1: Hierarchical Grid",
        text7:"Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right."
      },
      {
        image: img13,
        text2: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple',
        tit:"Example 2: Column Grid",
        text7:"Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides"
      },
      {
        image: img14,
        text2: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Example 3: Modular Grid",
        text7:"Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element"
      },
      {
        image: img15,
        text2: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.',
        tit:'Example 4: Breaking the Grid',
        text7:"Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it."
      },
      {
        image: img16,
        text2: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Benefits of the Grid",
        text8:"Using a grid benefits both end users and the designers alike",
        text9:"Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfacesA good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",

      },
      {
        image: img17,
        text2: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)',
        text3:'Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.',
        tit:'Choosing and Setting Up Your Grid',
        text7:'Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.',
        text8:"Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
      },
      {
        image: img18,
        text2: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
        text3:'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
      },
      {
        image: img19,
        text2: 'Content or elements should be placed within and across columns, not gutters',
        text3:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid',
        tit:'Conclusion',
        text7:'Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.',
        buttons: [
          { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
          { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
        ]
      },
    ]
  },
  { 
    id: 13, 
    image: img7,
    subtitle: "Olivia Rhye • 1 Jan 2023", 
    title: 'UX review presentations', 
    content: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    buttons: [
      { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
      { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
      { label: 'Presentation', bgColor: 'bg-[#FDF2FA]', textColor: 'text-btncolor3' },
    ],
    sections: [
      {
        image: img11,
        text1:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        text: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        text2:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page",
        text3:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        text4:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns",
        text5:"Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing",
        text6:"Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid",
        tite:"Breaking Down the Grid",
        text7:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        text8:"Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        text9:"Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile",
      },
      {
        image: img12,
        text2: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
        tit:"Examples of Grids in Use",
        tit2 :"Example 1: Hierarchical Grid",
        text7:"Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right."
      },
      {
        image: img13,
        text2: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple',
        tit:"Example 2: Column Grid",
        text7:"Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides"
      },
      {
        image: img14,
        text2: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Example 3: Modular Grid",
        text7:"Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element"
      },
      {
        image: img15,
        text2: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.',
        tit:'Example 4: Breaking the Grid',
        text7:"Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it."
      },
      {
        image: img16,
        text2: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Benefits of the Grid",
        text8:"Using a grid benefits both end users and the designers alike",
        text9:"Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfacesA good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",

      },
      {
        image: img17,
        text2: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)',
        text3:'Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.',
        tit:'Choosing and Setting Up Your Grid',
        text7:'Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.',
        text8:"Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
      },
      {
        image: img18,
        text2: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
        text3:'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
      },
      {
        image: img19,
        text2: 'Content or elements should be placed within and across columns, not gutters',
        text3:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid',
        tit:'Conclusion',
        text7:'Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.',
        buttons: [
          { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
          { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
        ]
      },
    ]
  },
  { 
    id: 14, 
    image: img8,
    subtitle: "Olivia Rhye • 1 Jan 2023", 
    title: 'UX review presentations', 
    content: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    buttons: [
      { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
      { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
      { label: 'Presentation', bgColor: 'bg-[#FDF2FA]', textColor: 'text-btncolor3' },
    ],
    sections: [
      {
        image: img11,
        text1:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        text: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        text2:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page",
        text3:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        text4:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns",
        text5:"Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing",
        text6:"Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid",
        tite:"Breaking Down the Grid",
        text7:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        text8:"Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        text9:"Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile",
      },
      {
        image: img12,
        text2: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
        tit:"Examples of Grids in Use",
        tit2 :"Example 1: Hierarchical Grid",
        text7:"Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right."
      },
      {
        image: img13,
        text2: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple',
        tit:"Example 2: Column Grid",
        text7:"Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides"
      },
      {
        image: img14,
        text2: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Example 3: Modular Grid",
        text7:"Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element"
      },
      {
        image: img15,
        text2: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.',
        tit:'Example 4: Breaking the Grid',
        text7:"Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it."
      },
      {
        image: img16,
        text2: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Benefits of the Grid",
        text8:"Using a grid benefits both end users and the designers alike",
        text9:"Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfacesA good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",

      },
      {
        image: img17,
        text2: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)',
        text3:'Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.',
        tit:'Choosing and Setting Up Your Grid',
        text7:'Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.',
        text8:"Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
      },
      {
        image: img18,
        text2: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
        text3:'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
      },
      {
        image: img19,
        text2: 'Content or elements should be placed within and across columns, not gutters',
        text3:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid',
        tit:'Conclusion',
        text7:'Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.',
        buttons: [
          { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
          { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
        ]
      },
    ]
  },
  { 
    id: 15, 
    image: img9,
    subtitle: "Olivia Rhye • 1 Jan 2023", 
    title: 'UX review presentations', 
    content: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    buttons: [
      { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
      { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2'},
      { label: 'Presentation', bgColor: 'bg-[#FDF2FA]', textColor: 'text-btncolor3' },
    ],
    sections: [
      {
        image: img11,
        text1:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        text: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        text2:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page",
        text3:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        text4:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns",
        text5:"Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing",
        text6:"Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid",
        tite:"Breaking Down the Grid",
        text7:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        text8:"Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        text9:"Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile",
      },
      {
        image: img12,
        text2: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
        tit:"Examples of Grids in Use",
        tit2 :"Example 1: Hierarchical Grid",
        text7:"Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right."
      },
      {
        image: img13,
        text2: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple',
        tit:"Example 2: Column Grid",
        text7:"Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides"
      },
      {
        image: img14,
        text2: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Example 3: Modular Grid",
        text7:"Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element"
      },
      {
        image: img15,
        text2: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.',
        tit:'Example 4: Breaking the Grid',
        text7:"Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it."
      },
      {
        image: img16,
        text2: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Benefits of the Grid",
        text8:"Using a grid benefits both end users and the designers alike",
        text9:"Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfacesA good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",

      },
      {
        image: img17,
        text2: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)',
        text3:'Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.',
        tit:'Choosing and Setting Up Your Grid',
        text7:'Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.',
        text8:"Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
      },
      {
        image: img18,
        text2: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
        text3:'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
      },
      {
        image: img19,
        text2: 'Content or elements should be placed within and across columns, not gutters',
        text3:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid',
        tit:'Conclusion',
        text7:'Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.',
        buttons: [
          { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
          { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
        ]
      },
    ]
  },
  { 
    id: 16, 
    image: img10,
    subtitle: "Olivia Rhye • 1 Jan 2023", 
    title: 'UX review presentations', 
    content: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    buttons: [
      { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
      { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
      { label: 'Presentation', bgColor: 'bg-[#FDF2FA]', textColor: 'text-btncolor3'},
    ],
    sections: [
      {
        image: img11,
        text1:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        text: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        text2:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page",
        text3:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        text4:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns",
        text5:"Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing",
        text6:"Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid",
        tite:"Breaking Down the Grid",
        text7:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        text8:"Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        text9:"Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile",
      },
      {
        image: img12,
        text2: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
        tit:"Examples of Grids in Use",
        tit2 :"Example 1: Hierarchical Grid",
        text7:"Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right."
      },
      {
        image: img13,
        text2: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple',
        tit:"Example 2: Column Grid",
        text7:"Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides"
      },
      {
        image: img14,
        text2: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Example 3: Modular Grid",
        text7:"Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element"
      },
      {
        image: img15,
        text2: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.',
        tit:'Example 4: Breaking the Grid',
        text7:"Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it."
      },
      {
        image: img16,
        text2: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Benefits of the Grid",
        text8:"Using a grid benefits both end users and the designers alike",
        text9:"Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfacesA good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",

      },
      {
        image: img17,
        text2: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)',
        text3:'Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.',
        tit:'Choosing and Setting Up Your Grid',
        text7:'Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.',
        text8:"Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
      },
      {
        image: img18,
        text2: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
        text3:'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
      },
      {
        image: img19,
        text2: 'Content or elements should be placed within and across columns, not gutters',
        text3:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid',
        tit:'Conclusion',
        text7:'Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.',
        buttons: [
          { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
          { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
        ]
      },
    ]
  },
 
  { 
    id: 17, 
    image: img1,
    subtitle: "Olivia Rhye • 1 Jan 2023", 
    title: 'UX review presentations', 
    content: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    buttons: [
      { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
      { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
      { label: 'Presentation', bgColor: 'bg-[#FDF2FA]', textColor: 'text-btncolor3' },
    ],
    sections: [
      {
        image: img11,
        text1:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        text: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        text2:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page",
        text3:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        text4:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns",
        text5:"Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing",
        text6:"Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid",
        tite:"Breaking Down the Grid",
        text7:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        text8:"Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        text9:"Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile",
      },
      {
        image: img12,
        text2: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
        tit:"Examples of Grids in Use",
        tit2 :"Example 1: Hierarchical Grid",
        text7:"Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right."
      },
      {
        image: img13,
        text2: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple',
        tit:"Example 2: Column Grid",
        text7:"Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides"
      },
      {
        image: img14,
        text2: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Example 3: Modular Grid",
        text7:"Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element"
      },
      {
        image: img15,
        text2: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.',
        tit:'Example 4: Breaking the Grid',
        text7:"Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it."
      },
      {
        image: img16,
        text2: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Benefits of the Grid",
        text8:"Using a grid benefits both end users and the designers alike",
        text9:"Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfacesA good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",

      },
      {
        image: img17,
        text2: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)',
        text3:'Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.',
        tit:'Choosing and Setting Up Your Grid',
        text7:'Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.',
        text8:"Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
      },
      {
        image: img18,
        text2: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
        text3:'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
      },
      {
        image: img19,
        text2: 'Content or elements should be placed within and across columns, not gutters',
        text3:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid',
        tit:'Conclusion',
        text7:'Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.',
        buttons: [
          { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
          { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
        ]
      },
    ]
  },
  { 
    id: 18, 
    image: img4,
    subtitle: "Phoenix Baker • 1 Jan 2023", 
    title: 'Migrating to Linear 101', 
    content: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...',
    buttons: [
      { label: 'Design', bgColor: 'bg-[#F0F9FF]', textColor: 'text-[#026AA2]' },
      { label: 'Research', bgColor: 'bg-[#FDF2FA]', textColor: 'text-btncolor3' },
    ],
    sections: [
      {
        image: img11,
        text1:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        text: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        text2:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page",
        text3:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        text4:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns",
        text5:"Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing",
        text6:"Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid",
        tite:"Breaking Down the Grid",
        text7:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        text8:"Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        text9:"Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile",
      },
      {
        image: img12,
        text2: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
        tit:"Examples of Grids in Use",
        tit2 :"Example 1: Hierarchical Grid",
        text7:"Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right."
      },
      {
        image: img13,
        text2: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple',
        tit:"Example 2: Column Grid",
        text7:"Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides"
      },
      {
        image: img14,
        text2: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Example 3: Modular Grid",
        text7:"Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element"
      },
      {
        image: img15,
        text2: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.',
        tit:'Example 4: Breaking the Grid',
        text7:"Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it."
      },
      {
        image: img16,
        text2: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Benefits of the Grid",
        text8:"Using a grid benefits both end users and the designers alike",
        text9:"Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfacesA good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",

      },
      {
        image: img17,
        text2: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)',
        text3:'Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.',
        tit:'Choosing and Setting Up Your Grid',
        text7:'Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.',
        text8:"Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
      },
      {
        image: img18,
        text2: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
        text3:'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
      },
      {
        image: img19,
        text2: 'Content or elements should be placed within and across columns, not gutters',
        text3:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid',
        tit:'Conclusion',
        text7:'Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.',
        buttons: [
          { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
          { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
        ]
      },
    ]
  },
  { 
    id: 19, 
    image: img2,
    subtitle: "Lana Steiner • 1 Jan 2023", 
    title: 'Building your API Stack', 
    content: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...',
    buttons: [
      { label: 'Design', bgColor: 'bg-[#ECFDF3]', textColor: 'text-[#027A48]' },
      { label: 'Research', bgColor: 'bg-[#FDF2FA]', textColor: 'text-btncolor3' },
    ],
    sections: [
      {
        image: img11,
        text1:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        text: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        text2:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page",
        text3:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        text4:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns",
        text5:"Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing",
        text6:"Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid",
        tite:"Breaking Down the Grid",
        text7:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        text8:"Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        text9:"Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile",
      },
      {
        image: img12,
        text2: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
        tit:"Examples of Grids in Use",
        tit2 :"Example 1: Hierarchical Grid",
        text7:"Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right."
      },
      {
        image: img13,
        text2: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple',
        tit:"Example 2: Column Grid",
        text7:"Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides"
      },
      {
        image: img14,
        text2: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Example 3: Modular Grid",
        text7:"Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element"
      },
      {
        image: img15,
        text2: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.',
        tit:'Example 4: Breaking the Grid',
        text7:"Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it."
      },
      {
        image: img16,
        text2: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Benefits of the Grid",
        text8:"Using a grid benefits both end users and the designers alike",
        text9:"Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfacesA good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",

      },
      {
        image: img17,
        text2: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)',
        text3:'Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.',
        tit:'Choosing and Setting Up Your Grid',
        text7:'Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.',
        text8:"Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
      },
      {
        image: img18,
        text2: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
        text3:'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
      },
      {
        image: img19,
        text2: 'Content or elements should be placed within and across columns, not gutters',
        text3:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid',
        tit:'Conclusion',
        text7:'Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.',
        buttons: [
          { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
          { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
        ]
      },
    ]
  },
  { 
    id: 20, 
    image: img3,
    subtitle: "Olivia Rhye • 1 Jan 2023", 
    title: 'Grid system for better Design User Interface', 
    content: 'A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.',
    buttons: [
      { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
      { label: 'Interface', bgColor: 'bg-[#FDF2FA]', textColor: 'text-btncolor3' },
    ],
    sections: [
      {
        image: img11,
        text1:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        text: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        text2:"Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page",
        text3:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        text4:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns",
        text5:"Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing",
        text6:"Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid",
        tite:"Breaking Down the Grid",
        text7:"Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        text8:"Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        text9:"Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile",
      },
      {
        image: img12,
        text2: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
        tit:"Examples of Grids in Use",
        tit2 :"Example 1: Hierarchical Grid",
        text7:"Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right."
      },
      {
        image: img13,
        text2: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple',
        tit:"Example 2: Column Grid",
        text7:"Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides"
      },
      {
        image: img14,
        text2: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Example 3: Modular Grid",
        text7:"Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element"
      },
      {
        image: img15,
        text2: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.',
        tit:'Example 4: Breaking the Grid',
        text7:"Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it."
      },
      {
        image: img16,
        text2: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        tit:"Benefits of the Grid",
        text8:"Using a grid benefits both end users and the designers alike",
        text9:"Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfacesA good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",

      },
      {
        image: img17,
        text2: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)',
        text3:'Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.',
        tit:'Choosing and Setting Up Your Grid',
        text7:'Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.',
        text8:"Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
      },
      {
        image: img18,
        text2: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
        text3:'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
      },
      {
        image: img19,
        text2: 'Content or elements should be placed within and across columns, not gutters',
        text3:'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid',
        tit:'Conclusion',
        text7:'Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.',
        buttons: [
          { label: 'Design', bgColor: 'bg-[#F9F5FF]', textColor: 'text-titlecolor' },
          { label: 'Research', bgColor: 'bg-[#EEF4FF]', textColor: 'text-btncolor2' },
        ]
      },
    ]
  },
];
export default cardsData;
