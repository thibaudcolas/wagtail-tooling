module.exports = {
  principles: [
    {
      id: "WCAG2:perceivable",
      num: "1",
      versions: ["2.0", "2.1"],
      handle: "Perceivable",
      title:
        "Information and user interface components must be presentable to users in ways they can perceive.",
      guidelines: [
        {
          id: "WCAG2:text-alternatives",
          alt_id: ["text-equiv"],
          num: "1.1",
          versions: ["2.0", "2.1"],
          handle: "Text Alternatives",
          title:
            "Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.",
          techniques: [
            {
              advisory: [
                {
                  id: "TECH:future1",
                  title: "Providing sign language videos for audio-only files",
                },
              ],
            },
          ],
          successcriteria: [
            {
              id: "WCAG2:non-text-content",
              alt_id: ["text-equiv-all"],
              num: "1.1.1",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "Non-text Content",
              title:
                "All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below.",
              details: [
                {
                  type: "ulist",
                  items: [
                    {
                      handle: "Controls, Input",
                      text: "If non-text content is a control or accepts user input, then it has a name that describes its purpose. (Refer to Guideline 4.1 for additional requirements for controls and content that accepts user input.)",
                    },
                    {
                      handle: "Time-Based Media",
                      text: "If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to Guideline 1.2 for additional requirements for media.)",
                    },
                    {
                      handle: "Test",
                      text: "If non-text content is a test or exercise that would be invalid if presented in text, then text alternatives at least provide descriptive identification of the non-text content.",
                    },
                    {
                      handle: "Sensory",
                      text: "If non-text content is primarily intended to create a specific sensory experience, then text alternatives at least provide descriptive identification of the non-text content.",
                    },
                    {
                      handle: "CAPTCHA",
                      text: "If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities.",
                    },
                    {
                      handle: "Decoration, Formatting, Invisible",
                      text: "If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technology.",
                    },
                  ],
                },
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      situations: [
                        {
                          title:
                            "Situation A: If a short description can serve the same purpose and present the same information as the non-text content:",
                          techniques: [
                            {
                              id: "TECH:G94",
                              title:
                                "Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content",
                              using: [
                                {
                                  group: {
                                    title:
                                      "Short text alternative techniques for Situation A:",
                                    techniques: [
                                      {
                                        id: "TECH:ARIA6",
                                        title:
                                          "Using aria-label to provide labels for objects",
                                      },
                                      {
                                        id: "TECH:ARIA10",
                                        title:
                                          "Using aria-labelledby to provide a text alternative for non-text content",
                                      },
                                      {
                                        id: "TECH:G196",
                                        title:
                                          "Using a text alternative on one item within a group of images that describes all items in the group",
                                      },
                                      {
                                        id: "TECH:FLASH1",
                                        title:
                                          "Setting the name property for a non-text object",
                                      },
                                      {
                                        id: "TECH:FLASH5",
                                        title:
                                          "Combining adjacent image and text buttons for the same resource",
                                      },
                                      {
                                        id: "TECH:FLASH28",
                                        title:
                                          "Providing text alternatives for ASCII art, emoticons, and leetspeak in Flash",
                                      },
                                      {
                                        id: "TECH:H2",
                                        title:
                                          "Combining adjacent image and text links for the same resource",
                                      },
                                      {
                                        id: "TECH:H35",
                                        title:
                                          "Providing text alternatives on applet elements",
                                      },
                                      {
                                        id: "TECH:H37",
                                        title:
                                          "Using alt attributes on img elements",
                                      },
                                      {
                                        id: "TECH:H53",
                                        title:
                                          "Using the body of the object element",
                                      },
                                      {
                                        id: "TECH:H86",
                                        title:
                                          "Providing text alternatives for ASCII art, emoticons, and leetspeak",
                                      },
                                      {
                                        id: "TECH:PDF1",
                                        title:
                                          "Applying text alternatives to images with the Alt entry in PDF documents",
                                      },
                                      {
                                        id: "TECH:SL5",
                                        title:
                                          "Defining a Focusable Image Class for Silverlight",
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title:
                            "Situation B: If a short description can not serve the same purpose and present the same information as the non-text content (e.g., a chart or diagram):",
                          techniques: [
                            {
                              id: "TECH:G95",
                              title:
                                "Providing short text alternatives that provide a brief description of the non-text content",
                              using: [
                                {
                                  group: {
                                    title:
                                      "Short text alternative techniques for Situation B:",
                                    techniques: [
                                      {
                                        id: "TECH:ARIA6",
                                        title:
                                          "Using aria-label to provide labels for objects",
                                      },
                                      {
                                        id: "TECH:ARIA10",
                                        title:
                                          "Using aria-labelledby to provide a text alternative for non-text content",
                                      },
                                      {
                                        id: "TECH:G196",
                                        title:
                                          "Using a text alternative on one item within a group of images that describes all items in the group",
                                      },
                                      {
                                        id: "TECH:FLASH1",
                                        title:
                                          "Setting the name property for a non-text object",
                                      },
                                      {
                                        id: "TECH:FLASH5",
                                        title:
                                          "Combining adjacent image and text buttons for the same resource",
                                      },
                                      {
                                        id: "TECH:FLASH28",
                                        title:
                                          "Providing text alternatives for ASCII art, emoticons, and leetspeak in Flash",
                                      },
                                      {
                                        id: "TECH:H2",
                                        title:
                                          "Combining adjacent image and text links for the same resource",
                                      },
                                      {
                                        id: "TECH:H35",
                                        title:
                                          "Providing text alternatives on applet elements",
                                      },
                                      {
                                        id: "TECH:H37",
                                        title:
                                          "Using alt attributes on img elements",
                                      },
                                      {
                                        id: "TECH:H53",
                                        title:
                                          "Using the body of the object element",
                                      },
                                      {
                                        id: "TECH:H86",
                                        title:
                                          "Providing text alternatives for ASCII art, emoticons, and leetspeak",
                                      },
                                      {
                                        id: "TECH:PDF1",
                                        title:
                                          "Applying text alternatives to images with the Alt entry in PDF documents",
                                      },
                                      {
                                        id: "TECH:SL5",
                                        title:
                                          "Defining a Focusable Image Class for Silverlight",
                                      },
                                    ],
                                  },
                                },
                                {
                                  group: {
                                    title:
                                      "Long text alternative techniques for Situation B:",
                                    techniques: [
                                      {
                                        id: "TECH:ARIA15",
                                        title:
                                          "Using aria-describedby to provide descriptions of images",
                                      },
                                      {
                                        id: "TECH:G73",
                                        title:
                                          "Providing a long description in another location with a link to it that is immediately adjacent to the non-text content",
                                      },
                                      {
                                        id: "TECH:G74",
                                        title:
                                          "Providing a long description in text near the non-text content, with a reference to the location of the long description in the short description",
                                      },
                                      {
                                        id: "TECH:G92",
                                        title:
                                          "Providing long description for non-text content that serves the same purpose and presents the same information",
                                      },
                                      {
                                        id: "TECH:FLASH2",
                                        title:
                                          "Setting the description property for a non-text object in Flash",
                                      },
                                      {
                                        id: "TECH:FLASH11",
                                        title:
                                          "Providing a longer text description of an object",
                                      },
                                      {
                                        id: "TECH:H45",
                                        title: "Using longdesc",
                                      },
                                      {
                                        id: "TECH:H53",
                                        title:
                                          "Using the body of the object element",
                                      },
                                      {
                                        id: "TECH:SL8",
                                        title:
                                          "Displaying HelpText in Silverlight User Interfaces",
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title:
                            "Situation C: If non-text content is a control or accepts user input:",
                          techniques: [
                            {
                              id: "TECH:G82",
                              title:
                                "Providing a text alternative that identifies the purpose of the non-text content",
                              using: [
                                {
                                  group: {
                                    title:
                                      "Text alternative techniques for controls and input for Situation C:",
                                    techniques: [
                                      {
                                        id: "TECH:ARIA6",
                                        title:
                                          "Using aria-label to provide labels for objects",
                                      },
                                      {
                                        id: "TECH:ARIA9",
                                        title:
                                          "Using aria-labelledby to concatenate a label from several text nodes",
                                      },
                                      {
                                        id: "TECH:FLASH6",
                                        title:
                                          "Creating accessible hotspots using invisible buttons",
                                      },
                                      {
                                        id: "TECH:FLASH25",
                                        title:
                                          "Labeling a form control by setting its accessible name",
                                      },
                                      {
                                        id: "TECH:FLASH27",
                                        title:
                                          "Providing button labels that describe the purpose of a button",
                                      },
                                      {
                                        id: "TECH:FLASH29",
                                        title:
                                          "Setting the label property for form components",
                                      },
                                      {
                                        id: "TECH:FLASH30",
                                        title:
                                          "Specifying accessible names for image buttons",
                                      },
                                      {
                                        id: "TECH:FLASH32",
                                        title:
                                          "Using auto labeling to associate text labels with form controls",
                                      },
                                      {
                                        id: "TECH:H24",
                                        title:
                                          "Providing text alternatives for the area elements of image maps",
                                      },
                                      {
                                        id: "TECH:H30",
                                        title:
                                          "Providing link text that describes the purpose of a link for anchor elements",
                                      },
                                      {
                                        id: "TECH:H36",
                                        title:
                                          "Using alt attributes on images used as submit buttons",
                                      },
                                      {
                                        id: "TECH:H44",
                                        title:
                                          "Using label elements to associate text labels with form controls",
                                      },
                                      {
                                        id: "TECH:H65",
                                        title:
                                          "Using the title attribute to identify form controls when the label element cannot be used",
                                      },
                                      {
                                        id: "TECH:SL18",
                                        title:
                                          "Providing Text Equivalent for Nontext Silverlight Controls With AutomationProperties.Name",
                                      },
                                      {
                                        id: "TECH:SL26",
                                        title:
                                          "Using LabeledBy to Associate Labels and Targets in Silverlight",
                                      },
                                      {
                                        id: "TECH:SL30",
                                        title:
                                          "Using Silverlight Control Compositing and AutomationProperties.Name",
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title:
                            "Situation D: If non-text content is time-based media (including live video-only and live audio-only); a test or exercise that would be invalid if presented in text; or primarily intended to create a specific sensory experience:",
                          techniques: [
                            {
                              id: "TECH:future1",
                              title: "Providing a descriptive label",
                              using: [
                                {
                                  group: {
                                    title:
                                      "Short text alternative techniques for Situation D:",
                                    techniques: [
                                      {
                                        id: "TECH:ARIA6",
                                        title:
                                          "Using aria-label to provide labels for objects",
                                      },
                                      {
                                        id: "TECH:ARIA10",
                                        title:
                                          "Using aria-labelledby to provide a text alternative for non-text content",
                                      },
                                      {
                                        id: "TECH:G196",
                                        title:
                                          "Using a text alternative on one item within a group of images that describes all items in the group",
                                      },
                                      {
                                        id: "TECH:FLASH1",
                                        title:
                                          "Setting the name property for a non-text object",
                                      },
                                      {
                                        id: "TECH:FLASH5",
                                        title:
                                          "Combining adjacent image and text buttons for the same resource",
                                      },
                                      {
                                        id: "TECH:FLASH28",
                                        title:
                                          "Providing text alternatives for ASCII art, emoticons, and leetspeak in Flash",
                                      },
                                      {
                                        id: "TECH:H2",
                                        title:
                                          "Combining adjacent image and text links for the same resource",
                                      },
                                      {
                                        id: "TECH:H35",
                                        title:
                                          "Providing text alternatives on applet elements",
                                      },
                                      {
                                        id: "TECH:H37",
                                        title:
                                          "Using alt attributes on img elements",
                                      },
                                      {
                                        id: "TECH:H53",
                                        title:
                                          "Using the body of the object element",
                                      },
                                      {
                                        id: "TECH:H86",
                                        title:
                                          "Providing text alternatives for ASCII art, emoticons, and leetspeak",
                                      },
                                      {
                                        id: "TECH:PDF1",
                                        title:
                                          "Applying text alternatives to images with the Alt entry in PDF documents",
                                      },
                                      {
                                        id: "TECH:SL5",
                                        title:
                                          "Defining a Focusable Image Class for Silverlight",
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                            {
                              id: "TECH:ARIA6",
                              title:
                                "Using aria-label to provide labels for objects",
                            },
                            {
                              id: "TECH:ARIA10",
                              title:
                                "Using aria-labelledby to provide a text alternative for non-text content",
                            },
                            {
                              id: "TECH:G68",
                              title:
                                "Providing a short text alternative that describes the purpose of live audio-only and live video-only content",
                              using: [
                                {
                                  group: {
                                    title:
                                      "Short text alternative techniques for Situation D:",
                                    techniques: [
                                      {
                                        id: "TECH:ARIA6",
                                        title:
                                          "Using aria-label to provide labels for objects",
                                      },
                                      {
                                        id: "TECH:ARIA10",
                                        title:
                                          "Using aria-labelledby to provide a text alternative for non-text content",
                                      },
                                      {
                                        id: "TECH:G196",
                                        title:
                                          "Using a text alternative on one item within a group of images that describes all items in the group",
                                      },
                                      {
                                        id: "TECH:FLASH1",
                                        title:
                                          "Setting the name property for a non-text object",
                                      },
                                      {
                                        id: "TECH:FLASH5",
                                        title:
                                          "Combining adjacent image and text buttons for the same resource",
                                      },
                                      {
                                        id: "TECH:FLASH28",
                                        title:
                                          "Providing text alternatives for ASCII art, emoticons, and leetspeak in Flash",
                                      },
                                      {
                                        id: "TECH:H2",
                                        title:
                                          "Combining adjacent image and text links for the same resource",
                                      },
                                      {
                                        id: "TECH:H35",
                                        title:
                                          "Providing text alternatives on applet elements",
                                      },
                                      {
                                        id: "TECH:H37",
                                        title:
                                          "Using alt attributes on img elements",
                                      },
                                      {
                                        id: "TECH:H53",
                                        title:
                                          "Using the body of the object element",
                                      },
                                      {
                                        id: "TECH:H86",
                                        title:
                                          "Providing text alternatives for ASCII art, emoticons, and leetspeak",
                                      },
                                      {
                                        id: "TECH:PDF1",
                                        title:
                                          "Applying text alternatives to images with the Alt entry in PDF documents",
                                      },
                                      {
                                        id: "TECH:SL5",
                                        title:
                                          "Defining a Focusable Image Class for Silverlight",
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                            {
                              id: "TECH:G100",
                              title:
                                "Providing a short text alternative which is the accepted name or a descriptive name of the non-text content",
                              using: [
                                {
                                  group: {
                                    title:
                                      "Short text alternative techniques for Situation D:",
                                    techniques: [
                                      {
                                        id: "TECH:ARIA6",
                                        title:
                                          "Using aria-label to provide labels for objects",
                                      },
                                      {
                                        id: "TECH:ARIA10",
                                        title:
                                          "Using aria-labelledby to provide a text alternative for non-text content",
                                      },
                                      {
                                        id: "TECH:G196",
                                        title:
                                          "Using a text alternative on one item within a group of images that describes all items in the group",
                                      },
                                      {
                                        id: "TECH:FLASH1",
                                        title:
                                          "Setting the name property for a non-text object",
                                      },
                                      {
                                        id: "TECH:FLASH5",
                                        title:
                                          "Combining adjacent image and text buttons for the same resource",
                                      },
                                      {
                                        id: "TECH:FLASH28",
                                        title:
                                          "Providing text alternatives for ASCII art, emoticons, and leetspeak in Flash",
                                      },
                                      {
                                        id: "TECH:H2",
                                        title:
                                          "Combining adjacent image and text links for the same resource",
                                      },
                                      {
                                        id: "TECH:H35",
                                        title:
                                          "Providing text alternatives on applet elements",
                                      },
                                      {
                                        id: "TECH:H37",
                                        title:
                                          "Using alt attributes on img elements",
                                      },
                                      {
                                        id: "TECH:H53",
                                        title:
                                          "Using the body of the object element",
                                      },
                                      {
                                        id: "TECH:H86",
                                        title:
                                          "Providing text alternatives for ASCII art, emoticons, and leetspeak",
                                      },
                                      {
                                        id: "TECH:PDF1",
                                        title:
                                          "Applying text alternatives to images with the Alt entry in PDF documents",
                                      },
                                      {
                                        id: "TECH:SL5",
                                        title:
                                          "Defining a Focusable Image Class for Silverlight",
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title:
                            "Situation E: If non-text content is a CAPTCHA:",
                          techniques: [
                            {
                              and: [
                                {
                                  id: "TECH:G143",
                                  title:
                                    "Providing a text alternative that describes the purpose of the CAPTCHA",
                                },
                                {
                                  id: "TECH:G144",
                                  title:
                                    "Ensuring that the Web Page contains another CAPTCHA serving the same purpose using a different modality",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title:
                            "Situation F: If the non-text content should be ignored by assistive technology:",
                          techniques: [
                            {
                              id: "TECH:future1",
                              title:
                                "Implementing or marking the non-text content so that it will be ignored by assistive technology",
                              using: [
                                {
                                  group: {
                                    title:
                                      "Techniques to indicate that text alternatives are not required for Situation F:",
                                    techniques: [
                                      {
                                        id: "TECH:C9",
                                        title:
                                          "Using CSS to include decorative images",
                                      },
                                      {
                                        id: "TECH:FLASH3",
                                        title:
                                          "Marking objects in Flash so that they can be ignored by AT",
                                      },
                                      {
                                        id: "TECH:H67",
                                        title:
                                          "Using null alt text and no title attribute on img elements for images that AT should ignore",
                                      },
                                      {
                                        id: "TECH:PDF4",
                                        title:
                                          "Hiding decorative images with the Artifact tag in PDF documents",
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      situations: [
                        {
                          title:
                            "General Techniques for Informative Non-Text Content (Advisory)",
                          techniques: [
                            {
                              id: "TECH:future1",
                              title: "Identifying informative non-text content",
                            },
                            {
                              id: "TECH:future2",
                              title: "Keeping short descriptions short",
                            },
                            {
                              id: "TECH:future3",
                              title: "Describing images that include text",
                            },
                            {
                              id: "TECH:future4",
                              title:
                                "Providing a longer description of the non-text content where only a descriptive label is required using a technology-specific technique (for an accessibility-supported content technology) for long description listed above",
                            },
                            {
                              id: "TECH:future5",
                              title:
                                "Providing different sizes for non-text content when it cannot have an equivalent accessible alternative",
                            },
                            {
                              id: "TECH:future6",
                              title:
                                "Using server-side scripts to resize images of text",
                            },
                          ],
                        },
                        {
                          title:
                            "General Techniques for Live Non-Text Content (Advisory)",
                          techniques: [
                            {
                              id: "TECH:future1",
                              title:
                                "Linking to textual information that provides comparable information (e.g., for a traffic Webcam, a municipality could provide a link to the text traffic report.)",
                            },
                          ],
                        },
                        {
                          title:
                            "General techniques to minimize the barrier of CAPTCHAs",
                          techniques: [
                            {
                              id: "TECH:future1",
                              title:
                                "Providing more than two modalities of CAPTCHAs",
                            },
                            {
                              id: "TECH:future2",
                              title:
                                "Providing access to a human customer service representative who can bypass CAPTCHA",
                            },
                            {
                              id: "TECH:future3",
                              title:
                                "Not requiring CAPTCHAs for authorized users",
                            },
                          ],
                        },
                        {
                          title: "HTML Techniques (Advisory)",
                          techniques: [
                            {
                              id: "TECH:H46",
                              title: "Using noembed with embed",
                            },
                            {
                              id: "TECH:future2",
                              title:
                                "Writing for browsers that do not support frame",
                            },
                            {
                              id: "TECH:future3",
                              title: "Providing alternative content for iframe",
                            },
                            {
                              id: "TECH:future4",
                              title: "Not using long descriptions for iframe",
                            },
                            {
                              id: "TECH:future5",
                              title:
                                "Providing redundant text links for client-side image maps",
                            },
                          ],
                        },
                        {
                          title: "CSS Techniques (Advisory)",
                          techniques: [
                            {
                              id: "TECH:C18",
                              title:
                                "Using CSS margin and padding rules instead of spacer images for layout design",
                            },
                            {
                              id: "TECH:future2",
                              title:
                                "Using CSS background, :before or :after rules for decorative images instead of img elements",
                            },
                            {
                              id: "TECH:future3",
                              title: "Displaying empty table cells",
                            },
                          ],
                        },
                        {
                          title: "WAI-ARIA Techniques (Advisory)",
                          techniques: [
                            {
                              id: "TECH:future1",
                              title:
                                "Using the ARIA presentation role to indicate elements are purely presentational",
                            },
                          ],
                        },
                        {
                          title: "Silverlight Techniques (Advisory)",
                          techniques: [
                            {
                              id: "TECH:SL19",
                              title:
                                "Providing User Instructions With AutomationProperties.HelpText in Silverlight",
                            },
                          ],
                        },
                        {
                          title: "Metadata Techniques (Advisory)",
                          techniques: [
                            {
                              id: "TECH:future1",
                              title:
                                "Using metadata to associate text transcriptions with a video",
                            },
                            {
                              id: "TECH:future2",
                              title:
                                "Using metadata to associate text transcriptions with audio-only content",
                              using: [
                                {
                                  id: "TECH:future1",
                                  title:
                                    "EXAMPLE: Providing, in metadata, URI(s) that points to an audio description and a text transcript of a video.",
                                },
                                {
                                  id: "TECH:future2",
                                  title:
                                    "EXAMPLE: Providing, in metadata, URI(s) that point to several text transcripts (English, French, Dutch) of an audio file.",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F3",
                      title:
                        "Failure of Success Criterion 1.1.1 due to using CSS to include images that convey important information",
                    },
                    {
                      id: "TECH:F13",
                      title:
                        "Failure of Success Criterion 1.1.1 and 1.4.1 due to having a text alternative that does not include information that is conveyed by color differences in the image",
                    },
                    {
                      id: "TECH:F20",
                      title:
                        "Failure of Success Criterion 1.1.1 and 4.1.2 due to not updating text alternatives when changes to non-text content occur",
                    },
                    {
                      id: "TECH:F30",
                      title:
                        "Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)",
                    },
                    {
                      id: "TECH:F38",
                      title:
                        "Failure of Success Criterion 1.1.1 due to not marking up decorative images in HTML in a way that allows assistive technology to ignore them",
                    },
                    {
                      id: "TECH:F39",
                      title:
                        'Failure of Success Criterion 1.1.1 due to providing a text alternative that is not null (e.g., alt="spacer" or alt="image") for images that should be ignored by assistive technology',
                    },
                    {
                      id: "TECH:F65",
                      title:
                        'Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on img elements, area elements, and input elements of type "image"',
                    },
                    {
                      id: "TECH:F67",
                      title:
                        "Failure of Success Criterion 1.1.1 and 1.2.1 due to providing long descriptions for non-text content that does not serve the same purpose or does not present the same information",
                    },
                    {
                      id: "TECH:F71",
                      title:
                        "Failure of Success Criterion 1.1.1 due to using text look-alikes to represent text without providing a text alternative",
                    },
                    {
                      id: "TECH:F72",
                      title:
                        "Failure of Success Criterion 1.1.1 due to using ASCII art without providing a text alternative",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "WCAG2:time-based-media",
          alt_id: ["media-equiv"],
          num: "1.2",
          versions: ["2.0", "2.1"],
          handle: "Time-based Media",
          title: "Provide alternatives for time-based media.",
          techniques: [
            {
              advisory: [],
            },
          ],
          successcriteria: [
            {
              id: "WCAG2:audio-only-and-video-only-prerecorded",
              alt_id: ["media-equiv-av-only-alt"],
              num: "1.2.1",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "Audio-only and Video-only (Prerecorded)",
              title:
                "For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such:",
              details: [
                {
                  type: "ulist",
                  items: [
                    {
                      handle: "Prerecorded Audio-only",
                      text: "An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content.",
                    },
                    {
                      handle: "Prerecorded Video-only",
                      text: "Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.",
                    },
                  ],
                },
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      situations: [
                        {
                          title:
                            "Situation A: If the content is prerecorded audio-only:",
                          techniques: [
                            {
                              id: "TECH:G158",
                              title:
                                "Providing an alternative for time-based media for audio-only content",
                            },
                            {
                              id: "TECH:SL17",
                              title:
                                "Providing Static Alternative Content for Silverlight Media Playing in a MediaElement",
                            },
                          ],
                        },
                        {
                          title:
                            "Situation B: If the content is prerecorded video-only:",
                          techniques: [
                            {
                              id: "TECH:G159",
                              title:
                                "Providing an alternative for time-based media for video-only content",
                            },
                            {
                              id: "TECH:G166",
                              title:
                                "Providing audio that describes the important video content and describing it as such",
                            },
                            {
                              id: "TECH:SL17",
                              title:
                                "Providing Static Alternative Content for Silverlight Media Playing in a MediaElement",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:H96",
                      title:
                        "Using the track element to provide audio descriptions",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Providing a transcript of a live audio only presentation after the fact",
                    },
                    {
                      id: "TECH:future3",
                      title:
                        "Linking to textual information that provides comparable information (e.g., for a traffic Webcam, a municipality could provide a link to the text traffic report.)",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F30",
                      title:
                        "Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)",
                    },
                    {
                      id: "TECH:F67",
                      title:
                        "Failure of Success Criterion 1.1.1 and 1.2.1 due to providing long descriptions for non-text content that does not serve the same purpose or does not present the same information",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:captions-prerecorded",
              alt_id: ["media-equiv-captions"],
              num: "1.2.2",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "Captions (Prerecorded)",
              title:
                "Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G93",
                      title: "Providing open (always visible) captions",
                    },
                    {
                      id: "TECH:G87",
                      title: "Providing closed captions",
                    },
                    {
                      id: "TECH:G87",
                      title: "Providing closed captions",
                      using: [
                        {
                          id: "TECH:SM11",
                          title:
                            "Providing captions through synchronized text streams in SMIL 1.0",
                        },
                        {
                          id: "TECH:SM12",
                          title:
                            "Providing captions through synchronized text streams in SMIL 2.0",
                        },
                        {
                          id: "TECH:H95",
                          title: "Using the track element to provide captions",
                        },
                        {
                          id: "TECH:FLASH9",
                          title:
                            "Applying captions to prerecorded synchronized media",
                        },
                        {
                          id: "TECH:SL16",
                          title:
                            "Providing Script-Embedded Text Captions for MediaElement Content",
                        },
                        {
                          id: "TECH:SL28",
                          title:
                            "Using Separate Text-Format Text Captions for MediaElement Content",
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title:
                        'Providing a note saying "No sound is used in this clip" for video-only clips',
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Using SMIL 1.0 to provide captions for all languages for which there are audio tracks",
                    },
                    {
                      id: "TECH:future3",
                      title:
                        "Using SMIL 2.0 to provide captions for all languages for which there are audio tracks",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F8",
                      title:
                        "Failure of Success Criterion 1.2.2 due to captions omitting some dialogue or important sound effects",
                    },
                    {
                      id: "TECH:F74",
                      title:
                        "Failure of Success Criterion 1.2.2 and 1.2.8 due to not labeling a synchronized media alternative to text as an alternative",
                    },
                    {
                      id: "TECH:F75",
                      title:
                        "Failure of Success Criterion 1.2.2 by providing synchronized media without captions when the synchronized media presents more information than is presented on the page",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:audio-description-or-media-alternative-prerecorded",
              alt_id: ["media-equiv-audio-desc"],
              num: "1.2.3",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "Audio Description or Media Alternative (Prerecorded)",
              title:
                "An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G69",
                      title: "Providing an alternative for time based media",
                      using: [
                        {
                          id: "TECH:G58",
                          title:
                            "Placing a link to the alternative for time-based media immediately next to the non-text content",
                        },
                        {
                          id: "TECH:SL17",
                          title:
                            "Providing Static Alternative Content for Silverlight Media Playing in a MediaElement",
                        },
                      ],
                    },
                    {
                      id: "TECH:future2",
                      title: "Linking to the alternative for time-based media",
                      using: [
                        {
                          id: "TECH:H53",
                          title: "Using the body of the object element",
                        },
                      ],
                    },
                    {
                      id: "TECH:G78",
                      title:
                        "Providing a second, user-selectable, audio track that includes audio descriptions",
                    },
                    {
                      and: [
                        {
                          id: "TECH:G78",
                          title:
                            "Providing a second, user-selectable, audio track that includes audio descriptions",
                        },
                        {
                          id: "TECH:SL1",
                          title:
                            "Accessing Alternate Audio Tracks in Silverlight Media",
                        },
                      ],
                    },
                    {
                      id: "TECH:G173",
                      title:
                        "Providing a version of a movie with audio descriptions",
                      using: [
                        {
                          id: "TECH:SM6",
                          title: "Providing audio description in SMIL 1.0",
                        },
                        {
                          id: "TECH:SM7",
                          title: "Providing audio description in SMIL 2.0",
                        },
                        {
                          id: "TECH:FLASH26",
                          title: "Applying audio descriptions to Flash video",
                        },
                        {
                          id: "TECH:SL1",
                          title:
                            "Accessing Alternate Audio Tracks in Silverlight Media",
                        },
                        {
                          id: "TECH:future5",
                          title:
                            "Using any player that supports audio and video",
                        },
                      ],
                    },
                    {
                      id: "TECH:G8",
                      title:
                        "Providing a movie with extended audio descriptions",
                      using: [
                        {
                          id: "TECH:SM1",
                          title:
                            "Adding extended audio description in SMIL 1.0",
                        },
                        {
                          id: "TECH:SM2",
                          title:
                            "Adding extended audio description in SMIL 2.0",
                        },
                        {
                          id: "TECH:FLASH26",
                          title: "Applying audio descriptions to Flash video",
                        },
                        {
                          id: "TECH:SL1",
                          title:
                            "Accessing Alternate Audio Tracks in Silverlight Media",
                        },
                        {
                          id: "TECH:future5",
                          title:
                            "Using any player that supports audio and video",
                        },
                      ],
                    },
                    {
                      id: "TECH:G203",
                      title:
                        "Using a static text alternative to describe a talking head video",
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:H96",
                      title:
                        "Using the track element to provide audio descriptions",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Providing audio description in multiple languages in SMIL 1.0",
                    },
                    {
                      id: "TECH:future3",
                      title:
                        "Providing audio description in multiple languages in SMIL 2.0",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:captions-live",
              alt_id: ["media-equiv-real-time-captions"],
              num: "1.2.4",
              versions: ["2.0", "2.1"],
              level: "AA",
              handle: "Captions (Live)",
              title:
                "Captions are provided for all live audio content in synchronized media.",
              techniques: [
                {
                  sufficient: [
                    {
                      and: [
                        {
                          id: "TECH:G9",
                          title:
                            "Creating captions for live synchronized media",
                        },
                        {
                          id: "TECH:G93",
                          title: "Providing open (always visible) captions",
                        },
                      ],
                    },
                    {
                      and: [
                        {
                          id: "TECH:G9",
                          title:
                            "Creating captions for live synchronized media",
                        },
                        {
                          id: "TECH:G87",
                          title: "Providing closed captions",
                        },
                      ],
                    },
                    {
                      and: [
                        {
                          id: "TECH:G9",
                          title:
                            "Creating captions for live synchronized media",
                        },
                        {
                          id: "TECH:G87",
                          title: "Providing closed captions",
                        },
                      ],
                      using: [
                        {
                          id: "TECH:SM11",
                          title:
                            "Providing captions through synchronized text streams in SMIL 1.0",
                        },
                        {
                          id: "TECH:SM12",
                          title:
                            "Providing captions through synchronized text streams in SMIL 2.0",
                        },
                      ],
                    },
                  ],
                },
              ],
              sufficientNotes: [
                "Captions may be generated using real-time text translation service.",
              ],
            },
            {
              id: "WCAG2:audio-description-prerecorded",
              alt_id: ["media-equiv-audio-desc-only"],
              num: "1.2.5",
              versions: ["2.0", "2.1"],
              level: "AA",
              handle: "Audio Description (Prerecorded)",
              title:
                "Audio description is provided for all prerecorded video content in synchronized media.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G78",
                      title:
                        "Providing a second, user-selectable, audio track that includes audio descriptions",
                    },
                    {
                      and: [
                        {
                          id: "TECH:G78",
                          title:
                            "Providing a second, user-selectable, audio track that includes audio descriptions",
                        },
                        {
                          id: "TECH:SL1",
                          title:
                            "Accessing Alternate Audio Tracks in Silverlight Media",
                        },
                      ],
                    },
                    {
                      id: "TECH:G173",
                      title:
                        "Providing a version of a movie with audio descriptions",
                      using: [
                        {
                          id: "TECH:SM6",
                          title: "Providing audio description in SMIL 1.0",
                        },
                        {
                          id: "TECH:SM7",
                          title: "Providing audio description in SMIL 2.0",
                        },
                        {
                          id: "TECH:FLASH26",
                          title: "Applying audio descriptions to Flash video",
                        },
                        {
                          id: "TECH:future4",
                          title:
                            "Using any player that supports audio and video",
                        },
                      ],
                    },
                    {
                      id: "TECH:G8",
                      title:
                        "Providing a movie with extended audio descriptions",
                      using: [
                        {
                          id: "TECH:SM1",
                          title:
                            "Adding extended audio description in SMIL 1.0",
                        },
                        {
                          id: "TECH:SM2",
                          title:
                            "Adding extended audio description in SMIL 2.0",
                        },
                        {
                          id: "TECH:FLASH26",
                          title: "Applying audio descriptions to Flash video",
                        },
                        {
                          id: "TECH:future4",
                          title:
                            "Using any player that supports audio and video",
                        },
                      ],
                    },
                    {
                      id: "TECH:G203",
                      title:
                        "Using a static text alternative to describe a talking head video",
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:H96",
                      title:
                        "Using the track element to provide audio descriptions",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Providing audio description in multiple languages in SMIL 1.0",
                    },
                    {
                      id: "TECH:future3",
                      title:
                        "Providing audio description in multiple languages in SMIL 2.0",
                    },
                    {
                      id: "TECH:future4",
                      title:
                        "Providing audio description for live synchronized media",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:sign-language-prerecorded",
              alt_id: ["media-equiv-sign"],
              num: "1.2.6",
              versions: ["2.0", "2.1"],
              level: "AAA",
              handle: "Sign Language (Prerecorded)",
              title:
                "Sign language interpretation is provided for all prerecorded audio content in synchronized media.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G54",
                      title:
                        "Including a sign language interpreter in the video stream",
                    },
                    {
                      id: "TECH:G81",
                      title:
                        "Providing a synchronized video of the sign language interpreter that can be displayed in a different viewport or overlaid on the image by the player",
                      using: [
                        {
                          id: "TECH:SM13",
                          title:
                            "Providing sign language interpretation through synchronized video streams in SMIL 1.0",
                        },
                        {
                          id: "TECH:SM14",
                          title:
                            "Providing sign language interpretation through synchronized video streams in SMIL 2.0",
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      situations: [
                        {
                          title: "Metadata Techniques",
                          techniques: [
                            {
                              id: "TECH:future1",
                              title:
                                "Using metadata to associate sign language alternatives of a video to enable choice of sign language",
                              using: [
                                {
                                  id: "TECH:future1",
                                  title:
                                    "EXAMPLE: Providing, in metadata, URI(s) that point to several English sign language translations (ASL, SASL, BSL, Auslan, ISL, NZSL) of a Web page.",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:extended-audio-description-prerecorded",
              alt_id: ["media-equiv-extended-ad"],
              num: "1.2.7",
              versions: ["2.0", "2.1"],
              level: "AAA",
              handle: "Extended Audio Description (Prerecorded)",
              title:
                "Where pauses in foreground audio are insufficient to allow audio descriptions to convey the sense of the video, extended audio description is provided for all prerecorded video content in synchronized media.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G8",
                      title:
                        "Providing a movie with extended audio descriptions",
                      using: [
                        {
                          id: "TECH:SM1",
                          title:
                            "Adding extended audio description in SMIL 1.0",
                        },
                        {
                          id: "TECH:SM2",
                          title:
                            "Adding extended audio description in SMIL 2.0",
                        },
                        {
                          id: "TECH:future3",
                          title:
                            "Using any player that supports audio and video",
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:H96",
                      title:
                        "Using the track element to provide audio descriptions",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Adding extended audio description in multiple languages in SMIL 1.0",
                    },
                    {
                      id: "TECH:future3",
                      title:
                        "Adding extended audio description in multiple languages in SMIL 2.0",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:media-alternative-prerecorded",
              alt_id: ["media-equiv-text-doc"],
              num: "1.2.8",
              versions: ["2.0", "2.1"],
              level: "AAA",
              handle: "Media Alternative (Prerecorded)",
              title:
                "An alternative for time-based media is provided for all prerecorded synchronized media and for all prerecorded video-only media.",
              techniques: [
                {
                  sufficient: [
                    {
                      situations: [
                        {
                          title:
                            "Situation A: If the content is prerecorded synchronized media:",
                          techniques: [
                            {
                              id: "TECH:G69",
                              title:
                                "Providing an alternative for time based media",
                              using: [
                                {
                                  id: "TECH:G58",
                                  title:
                                    "Placing a link to the alternative for time-based media immediately next to the non-text content",
                                },
                                {
                                  id: "TECH:SL17",
                                  title:
                                    "Providing Static Alternative Content for Silverlight Media Playing in a MediaElement",
                                },
                              ],
                            },
                            {
                              id: "TECH:future2",
                              title:
                                "Linking to the alternative for time-based media",
                              using: [
                                {
                                  id: "TECH:H53",
                                  title: "Using the body of the object element",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title:
                            "Situation B: If the content is prerecorded video-only:",
                          techniques: [
                            {
                              id: "TECH:G159",
                              title:
                                "Providing an alternative for time-based media for video-only content",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:H46",
                      title: "Using noembed with embed",
                    },
                    {
                      id: "TECH:future2",
                      title: "Providing a corrected script",
                    },
                    {
                      id: "TECH:future3",
                      title: "Adding detail to audio description",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F74",
                      title:
                        "Failure of Success Criterion 1.2.2 and 1.2.8 due to not labeling a synchronized media alternative to text as an alternative",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:audio-only-live",
              alt_id: ["media-equiv-live-audio-only"],
              num: "1.2.9",
              versions: ["2.0", "2.1"],
              level: "AAA",
              handle: "Audio-only (Live)",
              title:
                "An alternative for time-based media that presents equivalent information for live audio-only content is provided.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G151",
                      title:
                        "Providing a link to a text transcript of a prepared statement or script if the script is followed",
                    },
                    {
                      id: "TECH:G150",
                      title:
                        "Providing text based alternatives for live audio-only content",
                    },
                    {
                      id: "TECH:G157",
                      title:
                        "Incorporating a live audio captioning service into a Web page",
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title:
                        "Using metadata to associate text transcriptions with audio-only content",
                      using: [
                        {
                          id: "TECH:text1",
                          title:
                            "<em>Example:</em> Providing, in metadata, URI(s) that point to several text transcripts (English, French, Dutch) of an audio file.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "WCAG2:adaptable",
          alt_id: ["content-structure-separation"],
          num: "1.3",
          versions: ["2.0", "2.1"],
          handle: "Adaptable",
          title:
            "Create content that can be presented in different ways (for example simpler layout) without losing information or structure.",
          techniques: [],
          successcriteria: [
            {
              id: "WCAG2:info-and-relationships",
              alt_id: ["content-structure-separation-programmatic"],
              num: "1.3.1",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "Info and Relationships",
              title:
                "Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.",
              techniques: [
                {
                  sufficient: [
                    {
                      situations: [
                        {
                          title:
                            "Situation A: The technology provides semantic structure to make information and relationships conveyed through presentation programmatically determinable:",
                          techniques: [
                            {
                              id: "TECH:ARIA11",
                              title:
                                "Using ARIA landmarks to identify regions of a page",
                            },
                            {
                              id: "TECH:ARIA12",
                              title: "Using role=heading to identify headings",
                            },
                            {
                              id: "TECH:ARIA13",
                              title:
                                "Using aria-labelledby to name regions and landmarks",
                            },
                            {
                              id: "TECH:ARIA16",
                              title:
                                "Using aria-labelledby to provide a name for user interface controls",
                            },
                            {
                              id: "TECH:ARIA17",
                              title:
                                "Using grouping roles to identify related form controls",
                            },
                            {
                              id: "TECH:ARIA20",
                              title:
                                "Using the region role to identify a region of the page",
                            },
                            {
                              and: [
                                {
                                  id: "TECH:G115",
                                  title:
                                    "Using semantic elements to mark up structure",
                                },
                                {
                                  id: "TECH:H49",
                                  title:
                                    "Using semantic markup to mark emphasized or special text",
                                },
                              ],
                            },
                            {
                              id: "TECH:G117",
                              title:
                                "Using text to convey information that is conveyed by variations in presentation of text",
                            },
                            {
                              id: "TECH:G140",
                              title:
                                "Separating information and structure from presentation to enable different presentations",
                            },
                            {
                              id: "TECH:future10",
                              title:
                                "Making information and relationships conveyed through presentation programmatically determinable using the following techniques:",
                              using: [
                                {
                                  id: "TECH:G138",
                                  title:
                                    "Using semantic markup whenever color cues are used",
                                },
                                {
                                  id: "TECH:H51",
                                  title:
                                    "Using table markup to present tabular information",
                                },
                                {
                                  id: "TECH:PDF6",
                                  title:
                                    "Using table elements for table markup in PDF Documents",
                                },
                                {
                                  id: "TECH:PDF20",
                                  title:
                                    "Using Adobe Acrobat Pro's Table Editor to repair mistagged tables",
                                },
                                {
                                  id: "TECH:H39",
                                  title:
                                    "Using caption elements to associate data table captions with data tables",
                                },
                                {
                                  id: "TECH:FLASH31",
                                  title:
                                    "Specifying caption text for a DataGrid",
                                },
                                {
                                  id: "TECH:H73",
                                  title:
                                    "Using the summary attribute of the table element to give an overview of data tables",
                                },
                                {
                                  id: "TECH:FLASH23",
                                  title:
                                    "Adding summary information to a DataGrid",
                                },
                                {
                                  id: "TECH:H63",
                                  title:
                                    "Using the scope attribute to associate header cells and data cells in data tables",
                                },
                                {
                                  id: "TECH:H43",
                                  title:
                                    "Using id and headers attributes to associate data cells with header cells in data tables",
                                },
                                {
                                  id: "TECH:FLASH21",
                                  title:
                                    "Using the DataGrid component to associate column headers with cells",
                                },
                                {
                                  id: "TECH:H44",
                                  title:
                                    "Using label elements to associate text labels with form controls",
                                },
                                {
                                  id: "TECH:H65",
                                  title:
                                    "Using the title attribute to identify form controls when the label element cannot be used",
                                },
                                {
                                  id: "TECH:PDF10",
                                  title:
                                    "Providing labels for interactive form controls in PDF documents",
                                },
                                {
                                  id: "TECH:PDF12",
                                  title:
                                    "Providing name, role, value information for form fields in PDF documents",
                                },
                                {
                                  id: "TECH:FLASH32",
                                  title:
                                    "Using auto labeling to associate text labels with form controls",
                                },
                                {
                                  id: "TECH:FLASH29",
                                  title:
                                    "Setting the label property for form components",
                                },
                                {
                                  id: "TECH:FLASH25",
                                  title:
                                    "Labeling a form control by setting its accessible name",
                                },
                                {
                                  id: "TECH:H71",
                                  title:
                                    "Providing a description for groups of form controls using fieldset and legend elements",
                                },
                                {
                                  id: "TECH:SL20",
                                  title:
                                    "Relying on Silverlight AutomationPeer Behavior to Set AutomationProperties.Name",
                                },
                                {
                                  id: "TECH:SL26",
                                  title:
                                    "Using LabeledBy to Associate Labels and Targets in Silverlight",
                                },
                                {
                                  id: "TECH:H85",
                                  title:
                                    "Using OPTGROUP to group OPTION elements inside a SELECT",
                                },
                                {
                                  id: "TECH:H48",
                                  title:
                                    "Using ol, ul and dl for lists or groups of links",
                                },
                                {
                                  id: "TECH:H42",
                                  title: "Using h1-h6 to identify headings",
                                },
                                {
                                  id: "TECH:PDF9",
                                  title:
                                    "Providing headings by marking content with heading tags in PDF documents",
                                },
                                {
                                  id: "TECH:SCR21",
                                  title:
                                    "Using functions of the Document Object Model (DOM) to add content to a page",
                                },
                                {
                                  id: "TECH:PDF11",
                                  title:
                                    "Providing links and link text using the Link annotation and the /Link structure element in PDF documents",
                                },
                                {
                                  id: "TECH:PDF17",
                                  title:
                                    "Specifying consistent page numbering for PDF documents",
                                },
                                {
                                  id: "TECH:PDF21",
                                  title:
                                    "Using List tags for lists in PDF documents",
                                },
                                {
                                  id: "TECH:H97",
                                  title:
                                    "Grouping related links using the nav element",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title:
                            "Situation B: The technology in use does NOT provide the semantic structure to make the information and relationships conveyed through presentation programmatically determinable:",
                          techniques: [
                            {
                              id: "TECH:G117",
                              title:
                                "Using text to convey information that is conveyed by variations in presentation of text",
                            },
                            {
                              id: "TECH:FLASH8",
                              title:
                                "Adding a group name to the accessible name of a form control",
                            },
                            {
                              id: "TECH:future3",
                              title:
                                "Making information and relationships conveyed through presentation programmatically determinable or available in text using the following techniques:",
                              using: [
                                {
                                  id: "TECH:T1",
                                  title:
                                    "Using standard text formatting conventions for paragraphs",
                                },
                                {
                                  id: "TECH:T2",
                                  title:
                                    "Using standard text formatting conventions for lists",
                                },
                                {
                                  id: "TECH:T3",
                                  title:
                                    "Using standard text formatting conventions for headings",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:C22",
                      title: "Using CSS to control visual presentation of text",
                    },
                    {
                      id: "TECH:future2",
                      title: "Using CSS rather than tables for page layout",
                    },
                    {
                      id: "TECH:G162",
                      title:
                        "Positioning labels to maximize predictability of relationships",
                    },
                    {
                      id: "TECH:ARIA1",
                      title:
                        "Using the aria-describedby property to provide a descriptive label for user interface controls",
                    },
                    {
                      id: "TECH:ARIA2",
                      title:
                        "Identifying a required field with the aria-required property",
                    },
                    {
                      id: "TECH:future6",
                      title:
                        "Providing labels for all form controls that do not have implicit labels",
                    },
                    {
                      id: "TECH:G141",
                      title: "Organizing a page using headings",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F2",
                      title:
                        "Failure of Success Criterion 1.3.1 due to using changes in text presentation to convey information without using the appropriate markup or text",
                    },
                    {
                      id: "TECH:F33",
                      title:
                        "Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to create multiple columns in plain text content",
                    },
                    {
                      id: "TECH:F34",
                      title:
                        "Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to format tables in plain text content",
                    },
                    {
                      id: "TECH:F42",
                      title:
                        "Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links",
                    },
                    {
                      id: "TECH:F43",
                      title:
                        "Failure of Success Criterion 1.3.1 due to using structural markup in a way that does not represent relationships in the content",
                    },
                    {
                      id: "TECH:F46",
                      title:
                        "Failure of Success Criterion 1.3.1 due to using th elements, caption elements, or non-empty summary attributes in layout tables",
                    },
                    {
                      id: "TECH:F48",
                      title:
                        "Failure of Success Criterion 1.3.1 due to using the pre element to markup tabular information",
                    },
                    {
                      id: "TECH:F87",
                      title:
                        "Failure of Success Criterion 1.3.1 due to inserting non-decorative content by using :before and :after pseudo-elements and the 'content' property in CSS",
                    },
                    {
                      id: "TECH:F90",
                      title:
                        "Failure of Success Criterion 1.3.1 for incorrectly associating table headers and content via the headers and id attributes",
                    },
                    {
                      id: "TECH:F91",
                      title:
                        "Failure of Success Criterion 1.3.1 for not correctly marking up table headers",
                    },
                    {
                      id: "TECH:F92",
                      title:
                        "Failure of Success Criterion 1.3.1 due to the use of role presentation on content which conveys semantic information",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:meaningful-sequence",
              alt_id: ["content-structure-separation-sequence"],
              num: "1.3.2",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "Meaningful Sequence",
              title:
                "When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G57",
                      title: "Ordering the content in a meaningful sequence",
                    },
                    {
                      and: [
                        {
                          id: "TECH:text1",
                          title:
                            "Marking sequences in the content as meaningful",
                        },
                        {
                          id: "TECH:G57",
                          title:
                            "Ordering the content in a meaningful sequence",
                          using: [
                            {
                              id: "TECH:H34",
                              title:
                                "Using a Unicode right-to-left mark (RLM) or left-to-right mark (LRM) to mix text direction inline",
                            },
                            {
                              id: "TECH:H56",
                              title:
                                "Using the dir attribute on an inline element to resolve problems with nested directional runs",
                            },
                            {
                              id: "TECH:C6",
                              title:
                                "Positioning content based on structural markup",
                            },
                            {
                              id: "TECH:C8",
                              title:
                                "Using CSS letter-spacing to control spacing within a word",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: "TECH:C27",
                      title: "Making the DOM order match the visual order",
                    },
                    {
                      id: "TECH:FLASH15",
                      title:
                        "Using the tabIndex property to specify a logical reading order and a logical tab order in Flash",
                    },
                    {
                      id: "TECH:PDF3",
                      title:
                        "Ensuring correct tab and reading order in PDF documents",
                    },
                    {
                      id: "TECH:SL34",
                      title:
                        "Using the Silverlight Default Tab Sequence and Altering Tab Sequences With Properties",
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title:
                        "Using left-justified text for languages that are written left to right and right-justified text for languages that are written right-to-left",
                    },
                    {
                      id: "TECH:future2",
                      title: "Providing a link to linearized rendering",
                    },
                    {
                      id: "TECH:future3",
                      title:
                        "Providing a style switcher between style sheets that affect presentation order",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F1",
                      title:
                        "Failure of Success Criterion 1.3.2 due to changing the meaning of content by positioning information with CSS",
                    },
                    {
                      id: "TECH:F32",
                      title:
                        "Failure of Success Criterion 1.3.2 due to using white space characters to control spacing within a word",
                    },
                    {
                      id: "TECH:F33",
                      title:
                        "Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to create multiple columns in plain text content",
                    },
                    {
                      id: "TECH:F34",
                      title:
                        "Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to format tables in plain text content",
                    },
                    {
                      id: "TECH:F49",
                      title:
                        "Failure of Success Criterion 1.3.2 due to using an HTML layout table that does not make sense when linearized",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:sensory-characteristics",
              alt_id: ["content-structure-separation-understanding"],
              num: "1.3.3",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "Sensory Characteristics",
              title:
                "Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound.",
              details: [
                {
                  type: "note",
                  handle: "Note 1",
                  text: "For requirements related to color, refer to Guideline 1.4.",
                },
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G96",
                      title:
                        "Providing textual identification of items that otherwise rely only on sensory information to be understood",
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title:
                        "Using an image with a text alternative for graphical symbols instead of a Unicode font glyph with the desired graphical appearance but different meaning",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F14",
                      title:
                        "Failure of Success Criterion 1.3.3 due to identifying content only by its shape or location",
                    },
                    {
                      id: "TECH:F26",
                      title:
                        "Failure of Success Criterion 1.3.3 due to using a graphical symbol alone to convey information",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:orientation",
              alt_id: [],
              num: "1.3.4",
              versions: ["2.1"],
              level: "AA",
              handle: "Orientation",
              title:
                "Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential.",
            },
            {
              id: "WCAG2:identify-input-purpose",
              alt_id: [],
              num: "1.3.5",
              versions: ["2.1"],
              level: "AA",
              handle: "Identify Input Purpose",
              title:
                "The purpose of each input field collecting information about the user can be programmatically determined when:",
              details: [
                {
                  type: "ulist",
                  items: [
                    {
                      text: "The input field serves a purpose identified in the Input Purposes for User Interface Components section; and",
                    },
                    {
                      text: "The content is implemented using technologies with support for identifying the expected meaning for form input data.",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:identify-purpose",
              alt_id: [],
              num: "1.3.6",
              versions: ["2.1"],
              level: "AAA",
              handle: "Identify Purpose",
              title:
                "In content implemented using markup languages, the purpose of User Interface Components, icons, and regions can be programmatically determined.",
            },
          ],
        },
        {
          id: "WCAG2:distinguishable",
          alt_id: ["visual-audio-contrast"],
          num: "1.4",
          versions: ["2.0", "2.1"],
          handle: "Distinguishable",
          title:
            "Make it easier for users to see and hear content including separating foreground from background.",
          techniques: [
            {
              advisory: [
                {
                  id: "TECH:future1",
                  title: "Using readable fonts",
                },
                {
                  id: "TECH:future2",
                  title:
                    "Making sure any text in images of text is at least 14 points and has good contrast",
                },
                {
                  id: "TECH:future3",
                  title:
                    "Providing a highly visible highlighting mechanism for links or controls when they receive keyboard focus",
                },
              ],
            },
          ],
          successcriteria: [
            {
              id: "WCAG2:use-of-color",
              alt_id: ["visual-audio-contrast-without-color"],
              num: "1.4.1",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "Use of Color",
              title:
                "Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.",
              details: [
                {
                  type: "note",
                  handle: "Note 1",
                  text: "This success criterion addresses color perception specifically. Other forms of perception are covered in Guideline 1.3 including programmatic access to color and other visual presentation coding.",
                },
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      situations: [
                        {
                          title:
                            "Situation A: If the color of particular words, backgrounds, or other content is used to indicate information:",
                          techniques: [
                            {
                              id: "TECH:G14",
                              title:
                                "Ensuring that information conveyed by color differences is also available in text",
                            },
                            {
                              id: "TECH:G205",
                              title:
                                "Including a text cue for colored form control labels",
                            },
                            {
                              id: "TECH:G182",
                              title:
                                "Ensuring that additional visual cues are available when text color differences are used to convey information",
                            },
                            {
                              id: "TECH:G183",
                              title:
                                "Using a contrast ratio of 3:1 with surrounding text and providing additional visual cues on focus for links or controls where color alone is used to identify them",
                            },
                          ],
                        },
                        {
                          title:
                            "Situation B: If color is used within an image to convey information:",
                          techniques: [
                            {
                              id: "TECH:G111",
                              title: "Using color and pattern",
                            },
                            {
                              id: "TECH:G14",
                              title:
                                "Ensuring that information conveyed by color differences is also available in text",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title: "Conveying information redundantly using color",
                    },
                    {
                      id: "TECH:C15",
                      title:
                        "Using CSS to change the presentation of a user interface component when it receives focus",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F13",
                      title:
                        "Failure of Success Criterion 1.1.1 and 1.4.1 due to having a text alternative that does not include information that is conveyed by color differences in the image",
                    },
                    {
                      id: "TECH:F73",
                      title:
                        "Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision",
                    },
                    {
                      id: "TECH:F81",
                      title:
                        "Failure of Success Criterion 1.4.1 due to identifying required or error fields using color differences only",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:audio-control",
              alt_id: ["visual-audio-contrast-dis-audio"],
              num: "1.4.2",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "Audio Control",
              title:
                "If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.",
              details: [
                {
                  type: "note",
                  handle: "Note 1",
                  text: "Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether or not it is used to meet other success criteria) must meet this success criterion. See Conformance Requirement 5: Non-Interference.",
                },
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G60",
                      title:
                        "Playing a sound that turns off automatically within three seconds",
                    },
                    {
                      id: "TECH:G170",
                      title:
                        "Providing a control near the beginning of the Web page that turns off sounds that play automatically",
                    },
                    {
                      id: "TECH:G171",
                      title: "Playing sounds only on user request",
                    },
                    {
                      id: "TECH:SL24",
                      title:
                        "Using AutoPlay to Keep Silverlight Media from Playing Automatically",
                    },
                    {
                      id: "TECH:FLASH18",
                      title:
                        "Providing a control to turn off sounds that play automatically in Flash",
                    },
                    {
                      id: "TECH:FLASH34",
                      title:
                        "Turning off sounds that play automatically when an assistive technology is detected",
                    },
                    {
                      id: "TECH:SL3",
                      title:
                        "Controlling Silverlight MediaElement Audio Volume",
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title:
                        "Providing a site-wide preference to turn off audio in addition to providing a control near the top of the Web page that turns off sounds that play automatically",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F23",
                      title:
                        "Failure of 1.4.2 due to playing a sound longer than 3 seconds where there is no mechanism to turn it off",
                    },
                    {
                      id: "TECH:F93",
                      title:
                        "Failure of Success Criterion 1.4.2 for absence of a way to pause or stop an HTML5 media element that autoplays",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:contrast-minimum",
              alt_id: ["visual-audio-contrast-contrast"],
              num: "1.4.3",
              versions: ["2.0", "2.1"],
              level: "AA",
              handle: "Contrast (Minimum)",
              title:
                "The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:",
              details: [
                {
                  type: "ulist",
                  items: [
                    {
                      handle: "Large Text",
                      text: "Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;",
                    },
                    {
                      handle: "Incidental",
                      text: "Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.",
                    },
                    {
                      handle: "Logotypes",
                      text: "Text that is part of a logo or brand name has no minimum contrast requirement.",
                    },
                  ],
                },
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      situations: [
                        {
                          title:
                            "Situation A: text is less than 18 point if not bold and less than 14 point if bold",
                          techniques: [
                            {
                              id: "TECH:G18",
                              title:
                                "Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text",
                            },
                            {
                              id: "TECH:G148",
                              title:
                                "Not specifying background color, not specifying text color, and not using technology features that change those defaults",
                            },
                            {
                              id: "TECH:G174",
                              title:
                                "Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast",
                            },
                            {
                              id: "TECH:SL13",
                              title:
                                "Providing A Style Switcher To Switch To High Contrast",
                            },
                          ],
                        },
                        {
                          title:
                            "Situation B: text is at least 18 point if not bold and at least 14 point if bold",
                          techniques: [
                            {
                              id: "TECH:G145",
                              title:
                                "Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text",
                            },
                            {
                              id: "TECH:G148",
                              title:
                                "Not specifying background color, not specifying text color, and not using technology features that change those defaults",
                            },
                            {
                              id: "TECH:G174",
                              title:
                                "Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast",
                            },
                            {
                              id: "TECH:SL13",
                              title:
                                "Providing A Style Switcher To Switch To High Contrast",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:G156",
                      title:
                        "Using a technology that has commonly-available user agents that can change the foreground and background of blocks of text",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Using a higher contrast value for text that is over a patterned background",
                    },
                    {
                      id: "TECH:future3",
                      title:
                        "Using Unicode text and style sheets instead of images of text",
                    },
                    {
                      id: "TECH:future4",
                      title:
                        "Using a higher contrast values for lines in diagrams",
                    },
                    {
                      id: "TECH:future5",
                      title:
                        "Using greater contrast level for red-black text/background combinations",
                    },
                    {
                      id: "TECH:future6",
                      title:
                        "Using colors that are composed predominantly of mid spectral components for the light and spectral extremes (blue and red wavelengths) for the dark",
                    },
                    {
                      id: "TECH:future7",
                      title:
                        "Using a light pastel background rather than a white background behind black text to create sufficient but not extreme contrast",
                    },
                    {
                      id: "TECH:future8",
                      title:
                        "Making icons using simple line drawings that meet the contrast provisions for text",
                    },
                    {
                      id: "TECH:future9",
                      title:
                        "Providing sufficient contrast ratio in graphs and charts",
                    },
                    {
                      id: "TECH:future10",
                      title:
                        "Using a 3:1 contrast ratio or higher as the default presentation",
                    },
                    {
                      id: "TECH:future11",
                      title:
                        "Providing sufficient color contrast for empty text fields",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F24",
                      title:
                        "Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without specifying background colors or vice versa",
                    },
                    {
                      id: "TECH:F83",
                      title:
                        "Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text (or images of text)",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:resize-text",
              alt_id: ["visual-audio-contrast-scale"],
              num: "1.4.4",
              versions: ["2.0", "2.1"],
              level: "AA",
              handle: "Resize text",
              title:
                "Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G142",
                      title:
                        "Using a technology that has commonly-available user agents that support zoom",
                    },
                    {
                      id: "TECH:SL22",
                      title: "Supporting Browser Zoom in Silverlight",
                    },
                    {
                      id: "TECH:SL23",
                      title:
                        "Using A Style Switcher to Increase Font Size of Silverlight Text Elements",
                    },
                    {
                      id: "TECH:future4",
                      title:
                        "Ensuring that text containers resize when the text resizes AND using measurements that are relative to other measurements in the content",
                      using: [
                        {
                          id: "TECH:C28",
                          title:
                            "Specifying the size of text containers using em units",
                        },
                        {
                          id: "TECH:future2",
                          title: "Techniques for relative measurements",
                          using: [
                            {
                              id: "TECH:C12",
                              title: "Using percent for font sizes",
                            },
                            {
                              id: "TECH:C13",
                              title: "Using named font sizes",
                            },
                            {
                              id: "TECH:C14",
                              title: "Using em units for font sizes",
                            },
                          ],
                        },
                        {
                          id: "TECH:future3",
                          title: "Techniques for text container resizing",
                          using: [
                            {
                              id: "TECH:SCR34",
                              title:
                                "Calculating size and position in a way that scales with text size",
                            },
                            {
                              id: "TECH:G146",
                              title: "Using liquid layout",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: "TECH:G178",
                      title:
                        "Providing controls on the Web page that allow users to incrementally change the size of all text on the page up to 200 percent",
                    },
                    {
                      id: "TECH:G179",
                      title:
                        "Ensuring that there is no loss of content or functionality when the text resizes and text containers do not change their width",
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title: "Providing large fonts by default",
                    },
                    {
                      id: "TECH:future2",
                      title: "Using page-percent for container sizes",
                    },
                    {
                      id: "TECH:future3",
                      title:
                        "Avoiding scaling font sizes smaller than the user-agent default",
                      notes: [
                        "The author won't actually know the font size, but should avoid percentage scaling that results in less than 100%",
                      ],
                    },
                    {
                      id: "TECH:future4",
                      title: "Avoiding justified text",
                    },
                    {
                      id: "TECH:future5",
                      title:
                        "Providing sufficient inter-line and inter-column spacing",
                    },
                    {
                      id: "TECH:future6",
                      title:
                        "Providing different sizes for non-text content when it cannot have an equivalent accessible alternative",
                    },
                    {
                      id: "TECH:future7",
                      title: "Avoiding the use of text in raster images",
                    },
                    {
                      id: "TECH:future8",
                      title:
                        "Using server-side scripts to resize images of text",
                    },
                    {
                      id: "TECH:C17",
                      title: "Scaling form elements which contain text",
                    },
                    {
                      id: "TECH:future10",
                      title:
                        "Ensuring that text in raster images is at least 18pt",
                    },
                    {
                      id: "TECH:future11",
                      title: "Scaling text down to 50%",
                    },
                    {
                      id: "TECH:C20",
                      title:
                        "Using relative measurements to set column widths so that lines can average 80 characters or less when the browser is resized",
                    },
                    {
                      id: "TECH:C22",
                      title: "Using CSS to control visual presentation of text",
                    },
                    {
                      id: "TECH:future14",
                      title:
                        "Providing a mechanism to allow captions to be enlarged",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F69",
                      title:
                        "Failure of Success Criterion 1.4.4 when resizing visually rendered text up to 200 percent causes the text, image or controls to be clipped, truncated or obscured",
                    },
                    {
                      id: "TECH:F80",
                      title:
                        "Failure of Success Criterion 1.4.4 when text-based form controls do not resize when visually rendered text is resized up to 200%",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:images-of-text",
              alt_id: ["visual-audio-contrast-text-presentation"],
              num: "1.4.5",
              versions: ["2.0", "2.1"],
              level: "AA",
              handle: "Images of Text",
              title:
                "If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text except for the following:",
              details: [
                {
                  type: "ulist",
                  items: [
                    {
                      handle: "Customizable",
                      text: "The image of text can be visually customized to the user's requirements;",
                    },
                    {
                      handle: "Essential",
                      text: "A particular presentation of text is essential to the information being conveyed.",
                    },
                  ],
                },
                {
                  type: "note",
                  handle: "Note 1",
                  text: "Logotypes (text that is part of a logo or brand name) are considered essential.",
                },
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:C22",
                      title: "Using CSS to control visual presentation of text",
                    },
                    {
                      id: "TECH:SL31",
                      title:
                        "Using Silverlight Font Properties to Control Text Presentation",
                    },
                    {
                      id: "TECH:C30",
                      title:
                        "Using CSS to replace text with images of text and providing user interface controls to switch",
                    },
                    {
                      id: "TECH:G140",
                      title:
                        "Separating information and structure from presentation to enable different presentations",
                    },
                    {
                      id: "TECH:PDF7",
                      title:
                        "Performing OCR on a scanned PDF document to provide actual text",
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      situations: [
                        {
                          title: "General techniques for non-text content",
                          techniques: [
                            {
                              id: "TECH:future1",
                              title: "Identifying informative non-text content",
                            },
                          ],
                        },
                        {
                          title: "CSS Techniques",
                          techniques: [
                            {
                              id: "TECH:C12",
                              title: "Using percent for font sizes",
                            },
                            {
                              id: "TECH:C13",
                              title: "Using named font sizes",
                            },
                            {
                              id: "TECH:C14",
                              title: "Using em units for font sizes",
                            },
                            {
                              id: "TECH:C8",
                              title:
                                "Using CSS letter-spacing to control spacing within a word",
                            },
                            {
                              id: "TECH:C6",
                              title:
                                "Positioning content based on structural markup",
                            },
                            {
                              id: "TECH:future6",
                              title:
                                "Avoid applying text styling to text characters within a word",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:contrast-enhanced",
              alt_id: ["visual-audio-contrast7"],
              num: "1.4.6",
              versions: ["2.0", "2.1"],
              level: "AAA",
              handle: "Contrast (Enhanced)",
              title:
                "The visual presentation of text and images of text has a contrast ratio of at least 7:1, except for the following:",
              details: [
                {
                  type: "ulist",
                  items: [
                    {
                      handle: "Large Text",
                      text: "Large-scale text and images of large-scale text have a contrast ratio of at least 4.5:1;",
                    },
                    {
                      handle: "Incidental",
                      text: "Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.",
                    },
                    {
                      handle: "Logotypes",
                      text: "Text that is part of a logo or brand name has no minimum contrast requirement.",
                    },
                  ],
                },
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      situations: [
                        {
                          title:
                            "Situation A: text is less than 18 point if not bold and less than 14 point if bold",
                          techniques: [
                            {
                              id: "TECH:G17",
                              title:
                                "Ensuring that a contrast ratio of at least 7:1 exists between text (and images of text) and background behind the text",
                            },
                            {
                              id: "TECH:G148",
                              title:
                                "Not specifying background color, not specifying text color, and not using technology features that change those defaults",
                            },
                            {
                              id: "TECH:G174",
                              title:
                                "Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast",
                            },
                            {
                              id: "TECH:SL13",
                              title:
                                "Providing A Style Switcher To Switch To High Contrast",
                            },
                          ],
                        },
                        {
                          title:
                            "Situation B: text is as least 18 point if not bold and at least 14 point if bold",
                          techniques: [
                            {
                              id: "TECH:G18",
                              title:
                                "Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text",
                            },
                            {
                              id: "TECH:G148",
                              title:
                                "Not specifying background color, not specifying text color, and not using technology features that change those defaults",
                            },
                            {
                              id: "TECH:G174",
                              title:
                                "Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast",
                            },
                            {
                              id: "TECH:SL13",
                              title:
                                "Providing A Style Switcher To Switch To High Contrast",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:G156",
                      title:
                        "Using a technology that has commonly-available user agents that can change the foreground and background of blocks of text",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Using a higher contrast value for text that is over a patterned background",
                    },
                    {
                      id: "TECH:future3",
                      title:
                        "Using Unicode text and style sheets instead of images of text",
                    },
                    {
                      id: "TECH:future4",
                      title:
                        "Using a higher contrast values for lines in diagrams",
                    },
                    {
                      id: "TECH:future5",
                      title:
                        "Using greater contrast level for red-black text/background combinations",
                    },
                    {
                      id: "TECH:future6",
                      title:
                        "Using colors that are composed predominantly of mid spectral components for the light and spectral extremes (blue and red wavelengths) for the dark",
                    },
                    {
                      id: "TECH:future7",
                      title:
                        "Using a light pastel background rather than a white background behind black text to create sufficient but not extreme contrast",
                    },
                    {
                      id: "TECH:future8",
                      title:
                        "Making icons using simple line drawings that meet the contrast provisions for text",
                    },
                    {
                      id: "TECH:future9",
                      title:
                        "Providing sufficient contrast ratio in graphs and charts",
                    },
                    {
                      id: "TECH:future10",
                      title:
                        "Using a 3:1 contrast ratio or higher as the default presentation",
                    },
                    {
                      id: "TECH:future11",
                      title:
                        "Providing sufficient color contrast for empty text fields",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F24",
                      title:
                        "Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without specifying background colors or vice versa",
                    },
                    {
                      id: "TECH:F83",
                      title:
                        "Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text (or images of text)",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:low-or-no-background-audio",
              alt_id: ["visual-audio-contrast-noaudio"],
              num: "1.4.7",
              versions: ["2.0", "2.1"],
              level: "AAA",
              handle: "Low or No Background Audio",
              title:
                "For prerecorded audio-only content that (1) contains primarily speech in the foreground, (2) is not an audio CAPTCHA or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the following is true:",
              details: [
                {
                  type: "ulist",
                  items: [
                    {
                      handle: "No Background",
                      text: "The audio does not contain background sounds.",
                    },
                    {
                      handle: "Turn Off",
                      text: "The background sounds can be turned off.",
                    },
                    {
                      handle: "20 dB",
                      text: "The background sounds are at least 20 decibels lower than the foreground speech content, with the exception of occasional sounds that last for only one or two seconds.",
                    },
                  ],
                },
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G56",
                      title:
                        "Mixing audio files so that non-speech sounds are at least 20 decibels lower than the speech audio content",
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title:
                        "Providing a way for users to adjust auditory levels of foreground and background sound independently",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Providing an audio track for synchronized media that includes background sounds that are at least 20 decibels lower than speech",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:visual-presentation",
              alt_id: ["visual-audio-contrast-visual-presentation"],
              num: "1.4.8",
              versions: ["2.0", "2.1"],
              level: "AAA",
              handle: "Visual Presentation",
              title:
                "For the visual presentation of blocks of text, a mechanism is available to achieve the following:",
              details: [
                {
                  type: "olist",
                  items: [
                    {
                      handle: "",
                      text: "Foreground and background colors can be selected by the user.",
                    },
                    {
                      handle: "",
                      text: "Width is no more than 80 characters or glyphs (40 if CJK).",
                    },
                    {
                      handle: "",
                      text: "Text is not justified (aligned to both the left and the right margins).",
                    },
                    {
                      handle: "",
                      text: "Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.",
                    },
                    {
                      handle: "",
                      text: "Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text on a full-screen window.",
                    },
                  ],
                },
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      situations: [
                        {
                          title:
                            "First Requirement: Techniques to ensure foreground and background colors can be selected by the user",
                          techniques: [
                            {
                              id: "TECH:C23",
                              title:
                                "Specifying text and background colors of secondary content such as banners, features and navigation in CSS while not specifying text and background colors of the main content",
                              append: "OR",
                            },
                            {
                              id: "TECH:C25",
                              title:
                                "Specifying borders and layout in CSS to delineate areas of a Web page while not specifying text and text-background colors",
                              append: "OR",
                            },
                            {
                              id: "TECH:G156",
                              title:
                                "Using a technology that has commonly-available user agents that can change the foreground and background of blocks of text",
                              append: "OR",
                            },
                            {
                              id: "TECH:G148",
                              title:
                                "Not specifying background color, not specifying text color, and not using technology features that change those defaults",
                              append: "OR",
                            },
                            {
                              id: "TECH:G175",
                              title:
                                "Providing a multi color selection tool on the page for foreground and background colors",
                              append: "OR",
                            },
                          ],
                        },
                        {
                          title:
                            "Second Requirement: Techniques to ensure width is no more than 80 characters or glyphs (40 if CJK)",
                          techniques: [
                            {
                              id: "TECH:G204",
                              title:
                                "Not interfering with the user agent's reflow of text as the viewing window is narrowed",
                              append: "OR",
                            },
                            {
                              id: "TECH:C20",
                              title:
                                "Using relative measurements to set column widths so that lines can average 80 characters or less when the browser is resized",
                            },
                          ],
                        },
                        {
                          title:
                            "Third Requirement: Techniques to ensure text is not justified (aligned to both the left and the right margins)",
                          techniques: [
                            {
                              id: "TECH:C19",
                              title:
                                "Specifying alignment either to the left OR right in CSS",
                              append: "OR",
                            },
                            {
                              id: "TECH:G172",
                              title:
                                "Providing a mechanism to remove full justification of text",
                              append: "OR",
                            },
                            {
                              id: "TECH:G169",
                              title: "Aligning text on only one side",
                            },
                          ],
                        },
                        {
                          title:
                            "Fourth Requirement: Techniques to ensure line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing",
                          techniques: [
                            {
                              id: "TECH:G188",
                              title:
                                "Providing a button on the page to increase line spaces and paragraph spaces",
                              append: "OR",
                            },
                            {
                              id: "TECH:C21",
                              title: "Specifying line spacing in CSS",
                            },
                          ],
                        },
                        {
                          title:
                            "Fifth Requirement: Techniques to ensure text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text on a full-screen window",
                          techniques: [
                            {
                              id: "TECH:future1",
                              title:
                                "Not interfering with the user agent's reflow of text as the viewing window is narrowed",
                              append: "OR",
                            },
                            {
                              id: "TECH:G146",
                              title: "Using liquid layout",
                              append:
                                "AND using measurements that are relative to other measurements in the content by",
                              using: [
                                {
                                  id: "TECH:C12",
                                  title: "Using percent for font sizes",
                                  append: "OR",
                                },
                                {
                                  id: "TECH:C13",
                                  title: "Using named font sizes",
                                  append: "OR",
                                },
                                {
                                  id: "TECH:C14",
                                  title: "Using em units for font sizes",
                                  append: "OR",
                                },
                                {
                                  id: "TECH:C24",
                                  title:
                                    "Using percentage values in CSS for container sizes",
                                  append: "OR",
                                },
                                {
                                  id: "TECH:FLASH33",
                                  title:
                                    "Using relative values for Flash object dimensions",
                                  append: "OR",
                                },
                                {
                                  id: "TECH:SCR34",
                                  title:
                                    "Calculating size and position in a way that scales with text size",
                                },
                              ],
                            },
                            {
                              id: "TECH:G206",
                              title:
                                "Providing options within the content to switch to a layout that does not require the user to scroll horizontally to read a line of text",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title:
                        "Using a hover effect to highlight a paragraph, list items, or table cells (CSS)",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Presenting text in sans serif font or providing a mechanism to achieve this (CSS)",
                    },
                    {
                      id: "TECH:future3",
                      title:
                        "Using vertical (bulleted or numbered) lists rather than inline lists",
                    },
                    {
                      id: "TECH:future4",
                      title:
                        "Using upper and lower case according to the spelling conventions of the text language",
                    },
                    {
                      id: "TECH:future5",
                      title: "Providing large fonts by default",
                    },
                    {
                      id: "TECH:future6",
                      title: "Avoiding the use of text in raster images",
                    },
                    {
                      id: "TECH:future7",
                      title:
                        "Avoiding scaling font sizes smaller than the user-agent default",
                    },
                    {
                      id: "TECH:future8",
                      title: "Providing sufficient inter-column spacing",
                    },
                    {
                      id: "TECH:future9",
                      title: "Avoiding centrally aligned text",
                    },
                    {
                      id: "TECH:future10",
                      title: "Avoiding chunks of italic text",
                    },
                    {
                      id: "TECH:future11",
                      title:
                        "Avoiding overuse of different styles on individual pages and in sites",
                    },
                    {
                      id: "TECH:future12",
                      title: "Making links visually distinct",
                    },
                    {
                      id: "TECH:future13",
                      title: "Providing expandable bullets",
                    },
                    {
                      id: "TECH:future14",
                      title: "Show/hide bullet points",
                    },
                    {
                      id: "TECH:future15",
                      title:
                        "Putting an em-space or two spaces after sentences",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F24",
                      title:
                        "Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without specifying background colors or vice versa",
                    },
                    {
                      id: "TECH:F88",
                      title:
                        "Failure of Success Criterion 1.4.8 due to using text that is justified (aligned to both the left and the right margins)",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:images-of-text-no-exception",
              alt_id: ["visual-audio-contrast-text-images"],
              num: "1.4.9",
              versions: ["2.0", "2.1"],
              level: "AAA",
              handle: "Images of Text (No Exception)",
              title:
                "Images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.",
              details: [
                {
                  type: "note",
                  handle: "Note 1",
                  text: "Logotypes (text that is part of a logo or brand name) are considered essential.",
                },
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:C22",
                      title: "Using CSS to control visual presentation of text",
                    },
                    {
                      id: "TECH:SL31",
                      title:
                        "Using Silverlight Font Properties to Control Text Presentation",
                    },
                    {
                      id: "TECH:C30",
                      title:
                        "Using CSS to replace text with images of text and providing user interface controls to switch",
                    },
                    {
                      id: "TECH:G140",
                      title:
                        "Separating information and structure from presentation to enable different presentations",
                    },
                    {
                      id: "TECH:PDF7",
                      title:
                        "Performing OCR on a scanned PDF document to provide actual text",
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      situations: [
                        {
                          title:
                            "General Techniques for Non-Decorative Content",
                          techniques: [
                            {
                              id: "TECH:future1",
                              title:
                                "Using server-side scripts to resize images of text",
                            },
                          ],
                        },
                        {
                          title: "CSS Techniques",
                          techniques: [
                            {
                              id: "TECH:C12",
                              title: "Using percent for font sizes",
                            },
                            {
                              id: "TECH:C13",
                              title: "Using named font sizes",
                            },
                            {
                              id: "TECH:C14",
                              title: "Using em units for font sizes",
                            },
                            {
                              id: "TECH:C8",
                              title:
                                "Using CSS letter-spacing to control spacing within a word",
                            },
                            {
                              id: "TECH:C6",
                              title:
                                "Positioning content based on structural markup",
                            },
                            {
                              id: "TECH:future6",
                              title:
                                "Avoid applying text styling to text characters within a word",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:reflow",
              alt_id: [],
              num: "1.4.10",
              versions: ["2.1"],
              level: "AA",
              handle: "Reflow",
              title:
                "Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for:",
              details: [
                {
                  type: "ulist",
                  items: [
                    {
                      text: "Vertical scrolling content at a width equivalent to 320 CSS pixels;",
                    },
                    {
                      text: "Horizontal scrolling content at a height equivalent to 256 CSS pixels;",
                    },
                  ],
                },
                {
                  type: "p",
                  text: "Except for parts of the content which require two-dimensional layout for usage or meaning.",
                },
              ],
            },
            {
              id: "WCAG2:non-text-contrast",
              alt_id: [],
              num: "1.4.11",
              versions: ["2.1"],
              level: "AA",
              handle: "Non-text Contrast",
              title:
                "The visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s):",
              details: [
                {
                  type: "ulist",
                  items: [
                    {
                      handle: "User Interface Components",
                      text: "Visual information required to identify user interface components and states, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author;",
                    },
                    {
                      handle: "Graphical Objects",
                      text: "Parts of graphics required to understand the content, except when a particular presentation of graphics is essential to the information being conveyed.",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:text-spacing",
              alt_id: [],
              num: "1.4.12",
              versions: ["2.1"],
              level: "AA",
              handle: "Text Spacing",
              title:
                "In content implemented using markup languages that support the following text style properties, no loss of content or functionality occurs by setting all of the following and by changing no other style property:",
              details: [
                {
                  type: "ulist",
                  items: [
                    {
                      text: "Line height (line spacing) to at least 1.5 times the font size;",
                    },
                    {
                      text: "Spacing following paragraphs to at least 2 times the font size;",
                    },
                    {
                      text: "Letter spacing (tracking) to at least 0.12 times the font size;",
                    },
                    {
                      text: "Word spacing to at least 0.16 times the font size.",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:content-on-hover-or-focus",
              alt_id: [],
              num: "1.4.13",
              versions: ["2.1"],
              level: "AA",
              handle: "Content on Hover or Focus",
              title:
                "Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true:",
              details: [
                {
                  type: "ulist",
                  items: [
                    {
                      handle: "Dismissable",
                      text: "A mechanism is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an input error or does not obscure or replace other content;",
                    },
                    {
                      handle: "Hoverable",
                      text: "If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing;",
                    },
                    {
                      handle: "Persistent",
                      text: "The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid.",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "WCAG2:operable",
      num: "2",
      versions: ["2.0", "2.1"],
      handle: "Operable",
      title: "User interface components and navigation must be operable.",
      guidelines: [
        {
          id: "WCAG2:keyboard-accessible",
          alt_id: ["keyboard-operation"],
          num: "2.1",
          versions: ["2.0", "2.1"],
          handle: "Keyboard Accessible",
          title: "Make all functionality available from a keyboard.",
          techniques: [
            {
              advisory: [],
            },
          ],
          successcriteria: [
            {
              id: "WCAG2:keyboard",
              alt_id: ["keyboard-operation-keyboard-operable"],
              num: "2.1.1",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "Keyboard",
              title:
                "All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.",
              details: [
                {
                  type: "note",
                  handle: "Note 1",
                  text: "This exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input but the underlying function (text input) does not.",
                },
                {
                  type: "note",
                  handle: "Note 2",
                  text: "This does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation.",
                },
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G202",
                      title: "Ensuring keyboard control for all functionality",
                    },
                    {
                      id: "TECH:future2",
                      title: "Ensuring keyboard control",
                      using: [
                        {
                          id: "TECH:H91",
                          title: "Using HTML form controls and links",
                        },
                        {
                          id: "TECH:PDF3",
                          title:
                            "Ensuring correct tab and reading order in PDF documents",
                        },
                        {
                          id: "TECH:PDF11",
                          title:
                            "Providing links and link text using the Link annotation and the /Link structure element in PDF documents",
                        },
                        {
                          id: "TECH:PDF23",
                          title:
                            "Providing interactive form controls in PDF documents",
                        },
                        {
                          id: "TECH:SL15",
                          title:
                            "Providing Keyboard Shortcuts that Work Across the Entire Silverlight Application",
                        },
                      ],
                    },
                    {
                      id: "TECH:G90",
                      title: "Providing keyboard-triggered event handlers",
                      using: [
                        {
                          id: "TECH:SCR20",
                          title:
                            "Using both keyboard and other device-specific functions",
                        },
                        {
                          id: "TECH:SCR35",
                          title:
                            "Making actions keyboard accessible by using the onclick event of anchors and buttons",
                        },
                        {
                          id: "TECH:SCR2",
                          title:
                            "Using redundant keyboard and mouse event handlers",
                        },
                        {
                          id: "TECH:SL9",
                          title:
                            "Handling Key Events to Enable Keyboard Functionality in Silverlight",
                        },
                        {
                          id: "TECH:SL14",
                          title:
                            "Providing Custom Control Key Handling for Keyboard Functionality in Silverlight",
                        },
                      ],
                    },
                    {
                      id: "TECH:FLASH17",
                      title:
                        "Providing keyboard access to a Flash object and avoiding a keyboard trap",
                      using: [
                        {
                          id: "TECH:FLASH22",
                          title:
                            "Adding keyboard-accessible actions to static elements",
                        },
                        {
                          id: "TECH:FLASH16",
                          title:
                            "Making actions keyboard accessible by using the click event on standard components",
                        },
                        {
                          id: "TECH:FLASH14",
                          title:
                            "Using redundant keyboard and mouse event handlers in Flash",
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      and: [
                        {
                          id: "TECH:future1",
                          title:
                            "Using XHTML role, state, and value attributes if repurposing static elements as interactive user interface components",
                        },
                        {
                          id: "TECH:SCR29",
                          title:
                            "Adding keyboard-accessible actions to static HTML elements (Scripting)",
                        },
                      ],
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Providing keyboard shortcuts to important links and form controls",
                    },
                    {
                      id: "TECH:future3",
                      title:
                        "Using unique letter combinations to begin each item of a list",
                    },
                    {
                      id: "TECH:future4",
                      title:
                        "Choosing the most abstract event handler (Scripting)",
                    },
                    {
                      id: "TECH:future5",
                      title: "Using the onactivate event (Scripting)",
                    },
                    {
                      id: "TECH:future6",
                      title:
                        "Avoiding use of common user-agent keyboard commands for other purposes",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F42",
                      title:
                        "Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links",
                    },
                    {
                      id: "TECH:F54",
                      title:
                        "Failure of Success Criterion 2.1.1 due to using only pointing-device-specific event handlers (including gesture) for a function",
                    },
                    {
                      id: "TECH:F55",
                      title:
                        "Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:no-keyboard-trap",
              alt_id: ["keyboard-operation-trapping"],
              num: "2.1.2",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "No Keyboard Trap",
              title:
                "If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.",
              details: [
                {
                  type: "note",
                  handle: "Note 1",
                  text: "Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.",
                },
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G21",
                      title: "Ensuring that users are not trapped in content",
                    },
                    {
                      id: "TECH:FLASH17",
                      title:
                        "Providing keyboard access to a Flash object and avoiding a keyboard trap",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F10",
                      title:
                        "Failure of Success Criterion 2.1.2 and Conformance Requirement 5 due to combining multiple content formats in a way that traps users inside one format type",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:keyboard-no-exception",
              alt_id: ["keyboard-operation-all-funcs"],
              num: "2.1.3",
              versions: ["2.0", "2.1"],
              level: "AAA",
              handle: "Keyboard (No Exception)",
              title:
                "All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:text1",
                      title:
                        "No additional techniques exist for this Success Criterion. Follow techniques for <a href='#keyboard-operation-keyboard-operable'>Success Criterion 2.1.1</a>. If that is not possible because there is a requirement for path-dependent input, then it is not possible to meet this Level AAA Success Criterion.",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F42",
                      title:
                        "Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:character-key-shortcuts",
              alt_id: [],
              num: "2.1.4",
              versions: ["2.1"],
              level: "A",
              handle: "Character Key Shortcuts",
              title:
                "If a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true:",
              details: [
                {
                  type: "ulist",
                  items: [
                    {
                      handle: "Turn off",
                      text: "A mechanism is available to turn the shortcut off;",
                    },
                    {
                      handle: "Remap",
                      text: "A mechanism is available to remap the shortcut to use one or more non-printable keyboard characters (e.g. Ctrl, Alt, etc);",
                    },
                    {
                      handle: "Active only on focus",
                      text: "The keyboard shortcut for a user interface component is only active when that component has focus.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "WCAG2:enough-time",
          alt_id: ["time-limits"],
          num: "2.2",
          versions: ["2.0", "2.1"],
          handle: "Enough Time",
          title: "Provide users enough time to read and use content.",
          techniques: [
            {
              advisory: [],
            },
          ],
          successcriteria: [
            {
              id: "WCAG2:timing-adjustable",
              alt_id: ["time-limits-required-behaviors"],
              num: "2.2.1",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "Timing Adjustable",
              title:
                "For each time limit that is set by the content, at least one of the following is true:",
              details: [
                {
                  type: "ulist",
                  items: [
                    {
                      handle: "Turn off",
                      text: "The user is allowed to turn off the time limit before encountering it; or",
                    },
                    {
                      handle: "Adjust",
                      text: "The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or",
                    },
                    {
                      handle: "Extend",
                      text: 'The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or',
                    },
                    {
                      handle: "Real-time Exception",
                      text: "The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or",
                    },
                    {
                      handle: "Essential Exception",
                      text: "The time limit is essential and extending it would invalidate the activity; or",
                    },
                    {
                      handle: "20 Hour Exception",
                      text: "The time limit is longer than 20 hours.",
                    },
                  ],
                },
                {
                  type: "note",
                  handle: "Note 1",
                  text: "This success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with Success Criterion 3.2.1, which puts limits on changes of content or context as a result of user action.",
                },
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      situations: [
                        {
                          title:
                            "Situation A: If there are session time limits:",
                          techniques: [
                            {
                              id: "TECH:G133",
                              title:
                                "Providing a checkbox on the first page of a multipart form that allows users to ask for longer session time limit or no session time limit",
                            },
                            {
                              id: "TECH:G198",
                              title:
                                "Providing a way for the user to turn the time limit off",
                            },
                          ],
                        },
                        {
                          title:
                            "Situation B: If a time limit is controlled by a script on the page:",
                          techniques: [
                            {
                              id: "TECH:G198",
                              title:
                                "Providing a way for the user to turn the time limit off",
                            },
                            {
                              id: "TECH:G180",
                              title:
                                "Providing the user with a means to set the time limit to 10 times the default time limit",
                            },
                            {
                              and: [
                                {
                                  id: "TECH:SCR16",
                                  title:
                                    "Providing a script that warns the user a time limit is about to expire",
                                },
                                {
                                  id: "TECH:SCR1",
                                  title:
                                    "Allowing the user to extend the default time limit",
                                },
                              ],
                            },
                            {
                              id: "TECH:FLASH19",
                              title:
                                "Providing a script that warns the user a time limit is about to expire and provides a way to extend it",
                            },
                            {
                              id: "TECH:FLASH24",
                              title:
                                "Allowing the user to extend the default time limit",
                            },
                            {
                              id: "TECH:SL21",
                              title:
                                "Replacing A Silverlight Timed Animation With a Nonanimated Element",
                            },
                          ],
                        },
                        {
                          title:
                            "Situation C: If there are time limits on reading:",
                          techniques: [
                            {
                              id: "TECH:G4",
                              title:
                                "Allowing the content to be paused and restarted from where it was paused",
                            },
                            {
                              id: "TECH:G198",
                              title:
                                "Providing a way for the user to turn the time limit off",
                            },
                            {
                              id: "TECH:SCR33",
                              title:
                                "Using script to scroll content, and providing a mechanism to pause it",
                            },
                            {
                              id: "TECH:SCR36",
                              title:
                                "Providing a mechanism to allow users to display moving, scrolling, or auto-updating text in a static window or area",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title:
                        "Using a script to poll the server and notify a user if a time limit is present (Scripting)",
                    },
                    {
                      id: "TECH:future2",
                      title: "Using sounds to focus user's attention",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F40",
                      title:
                        "Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit",
                    },
                    {
                      id: "TECH:F41",
                      title:
                        "Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh to reload the page",
                    },
                    {
                      id: "TECH:F58",
                      title:
                        "Failure of Success Criterion 2.2.1 due to using server-side techniques to automatically redirect pages after a time-out",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:pause-stop-hide",
              alt_id: ["time-limits-pause"],
              num: "2.2.2",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "Pause, Stop, Hide",
              title:
                "For moving, blinking, scrolling, or auto-updating information, all of the following are true:",
              details: [
                {
                  type: "ulist",
                  items: [
                    {
                      handle: "Moving, blinking, scrolling",
                      text: "For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and",
                    },
                    {
                      handle: "Auto-updating",
                      text: "For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.",
                    },
                  ],
                },
                {
                  type: "note",
                  handle: "Note 1",
                  text: "For requirements related to flickering or flashing content, refer to Guideline 2.3.",
                },
                {
                  type: "note",
                  handle: "Note 2",
                  text: "Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.",
                },
                {
                  type: "note",
                  handle: "Note 3",
                  text: "Content that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so.",
                },
                {
                  type: "note",
                  handle: "Note 4",
                  text: "An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken.",
                },
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G4",
                      title:
                        "Allowing the content to be paused and restarted from where it was paused",
                    },
                    {
                      id: "TECH:SL11",
                      title:
                        "Pausing or Stopping A Decorative Silverlight Animation",
                    },
                    {
                      id: "TECH:SL12",
                      title:
                        "Pausing, Stopping, or Playing Media in Silverlight MediaElements",
                    },
                    {
                      id: "TECH:SCR33",
                      title:
                        "Using script to scroll content, and providing a mechanism to pause it",
                    },
                    {
                      id: "TECH:FLASH35",
                      title:
                        "Using script to scroll Flash content, and providing a mechanism to pause it",
                    },
                    {
                      id: "TECH:G11",
                      title:
                        "Creating content that blinks for less than 5 seconds",
                    },
                    {
                      id: "TECH:G187",
                      title:
                        "Using a technology to include blinking content that can be turned off via the user agent",
                    },
                    {
                      id: "TECH:G152",
                      title:
                        "Setting animated gif images to stop blinking after n cycles (within 5 seconds)",
                    },
                    {
                      id: "TECH:SCR22",
                      title:
                        "Using scripts to control blinking and stop it in five seconds or less",
                    },
                    {
                      id: "TECH:FLASH36",
                      title:
                        "Using scripts to control blinking and stop it in five seconds or less",
                    },
                    {
                      id: "TECH:G186",
                      title:
                        "Using a control in the Web page that stops moving, blinking, or auto-updating content",
                    },
                    {
                      id: "TECH:G191",
                      title:
                        "Providing a link, button, or other mechanism that reloads the page without any blinking content",
                    },
                    {
                      id: "TECH:SL24",
                      title:
                        "Using AutoPlay to Keep Silverlight Media from Playing Automatically",
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title:
                        "Providing a mechanism to stop all content that blinks within a Web page",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Providing the user with a means to stop moving content even if it stops automatically within 5 seconds",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F4",
                      title:
                        "Failure of Success Criterion 2.2.2 due to using text-decoration:blink without a mechanism to stop it in less than five seconds",
                    },
                    {
                      id: "TECH:F7",
                      title:
                        "Failure of Success Criterion 2.2.2 due to an object or applet, such as Java or Flash, that has blinking content without a mechanism to pause the content that blinks for more than five seconds",
                    },
                    {
                      id: "TECH:F16",
                      title:
                        "Failure of Success Criterion 2.2.2 due to including scrolling content where movement is not essential to the activity without also including a mechanism to pause and restart the content",
                    },
                    {
                      id: "TECH:F47",
                      title:
                        "Failure of Success Criterion 2.2.2 due to using the blink element",
                    },
                    {
                      id: "TECH:F50",
                      title:
                        "Failure of Success Criterion 2.2.2 due to a script that causes a blink effect without a mechanism to stop the blinking at 5 seconds or less",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:no-timing",
              alt_id: ["time-limits-no-exceptions"],
              num: "2.2.3",
              versions: ["2.0", "2.1"],
              level: "AAA",
              handle: "No Timing",
              title:
                "Timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G5",
                      title:
                        "Allowing users to complete an activity without any time limit",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:interruptions",
              alt_id: ["time-limits-postponed"],
              num: "2.2.4",
              versions: ["2.0", "2.1"],
              level: "AAA",
              handle: "Interruptions",
              title:
                "Interruptions can be postponed or suppressed by the user, except interruptions involving an emergency.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G75",
                      title:
                        "Providing a mechanism to postpone any updating of content",
                    },
                    {
                      id: "TECH:G76",
                      title:
                        "Providing a mechanism to request an update of the content instead of updating automatically",
                    },
                    {
                      id: "TECH:SCR14",
                      title:
                        "Using scripts to make nonessential alerts optional",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F40",
                      title:
                        "Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit",
                    },
                    {
                      id: "TECH:F41",
                      title:
                        "Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh to reload the page",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:re-authenticating",
              alt_id: ["time-limits-server-timeout"],
              num: "2.2.5",
              versions: ["2.0", "2.1"],
              level: "AAA",
              handle: "Re-authenticating",
              title:
                "When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:future1",
                      title:
                        "Providing options to continue without loss of data",
                      using: [
                        {
                          id: "TECH:G105",
                          title:
                            "Saving data so that it can be used after a user re-authenticates",
                        },
                        {
                          id: "TECH:G181",
                          title:
                            "Encoding user data as hidden or encrypted data in a re-authorization page",
                        },
                      ],
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F12",
                      title:
                        "Failure of Success Criterion 2.2.5 due to having a session time limit without a mechanism for saving user's input and re-establishing that information upon re-authentication",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:timeouts",
              alt_id: [],
              num: "2.2.6",
              versions: ["2.1"],
              level: "AAA",
              handle: "Timeouts",
              title:
                "Users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.",
            },
          ],
        },
        {
          id: "WCAG2:seizures-and-physical-reactions",
          alt_id: ["seizure"],
          num: "2.3",
          versions: ["2.0", "2.1"],
          handle: "Seizures and Physical Reactions",
          title:
            "Do not design content in a way that is known to cause seizures or physical reactions.",
          techniques: [
            {
              advisory: [
                {
                  id: "TECH:future1",
                  title:
                    "Ensuring that content does not violate spatial pattern thresholds",
                },
              ],
            },
          ],
          successcriteria: [
            {
              id: "WCAG2:three-flashes-or-below-threshold",
              alt_id: ["seizure-does-not-violate"],
              num: "2.3.1",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "Three Flashes or Below Threshold",
              title:
                "Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.",
              details: [
                {
                  type: "note",
                  handle: "Note 1",
                  text: "Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.",
                },
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G19",
                      title:
                        "Ensuring that no component of the content flashes more than three times in any 1-second period",
                    },
                    {
                      id: "TECH:G176",
                      title: "Keeping the flashing area small enough",
                    },
                    {
                      id: "TECH:G15",
                      title:
                        "Using a tool to ensure that content does not violate the general flash threshold or red flash threshold",
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title: "Reducing contrast for any flashing content",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Avoiding fully saturated reds for any flashing content",
                    },
                    {
                      id: "TECH:future3",
                      title:
                        "Reducing the number of flashes even if they do not violate thresholds",
                    },
                    {
                      id: "TECH:future4",
                      title:
                        "Providing a mechanism to suppress any flashing content before it begins",
                    },
                    {
                      id: "TECH:future5",
                      title:
                        "Slowing down live material to avoid rapid flashes (as in flashbulbs)",
                    },
                    {
                      id: "TECH:future6",
                      title:
                        "Freezing the image momentarily if 3 flashes within one second are detected",
                    },
                    {
                      id: "TECH:future7",
                      title:
                        "Dropping the contrast ratio if 3 flashes within one second are detected",
                    },
                    {
                      id: "TECH:future8",
                      title: "Allowing users to set a custom flash rate limit",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:three-flashes",
              alt_id: ["seizure-three-times"],
              num: "2.3.2",
              versions: ["2.0", "2.1"],
              level: "AAA",
              handle: "Three Flashes",
              title:
                "Web pages do not contain anything that flashes more than three times in any one second period.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G19",
                      title:
                        "Ensuring that no component of the content flashes more than three times in any 1-second period",
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title: "Reducing contrast for any flashing content",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Avoiding fully saturated reds for any flashing content",
                    },
                    {
                      id: "TECH:future3",
                      title:
                        "Reducing the number of flashes even if they don't violate thresholds",
                    },
                    {
                      id: "TECH:future4",
                      title:
                        "Slowing down live material to avoid rapid flashes (as in flashbulbs)",
                    },
                    {
                      id: "TECH:future5",
                      title:
                        "Freezing the image momentarily if 3 flashes within one second are detected",
                    },
                    {
                      id: "TECH:future6",
                      title:
                        "Dropping the contrast ratio if 3 flashes within one second are detected",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:animation-from-interactions",
              alt_id: [],
              num: "2.3.3",
              versions: ["2.1"],
              level: "AAA",
              handle: "Animation from Interactions",
              title:
                "Motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed.",
            },
          ],
        },
        {
          id: "WCAG2:navigable",
          alt_id: ["navigation-mechanisms"],
          num: "2.4",
          versions: ["2.0", "2.1"],
          handle: "Navigable",
          title:
            "Provide ways to help users navigate, find content, and determine where they are.",
          techniques: [
            {
              advisory: [
                {
                  id: "TECH:future1",
                  title: "Limiting the number of links per page",
                },
                {
                  id: "TECH:future2",
                  title:
                    "Providing mechanisms to navigate to different sections of the content of a Web page",
                },
                {
                  id: "TECH:future3",
                  title: "Making links visually distinct",
                },
                {
                  id: "TECH:future4",
                  title: "Highlighting search terms",
                },
              ],
            },
          ],
          successcriteria: [
            {
              id: "WCAG2:bypass-blocks",
              alt_id: ["navigation-mechanisms-skip"],
              num: "2.4.1",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "Bypass Blocks",
              title:
                "A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:future1",
                      title:
                        "Creating links to skip blocks of repeated material",
                      using: [
                        {
                          id: "TECH:G1",
                          title:
                            "Adding a link at the top of each page that goes directly to the main content area",
                        },
                        {
                          id: "TECH:G123",
                          title:
                            "Adding a link at the beginning of a block of repeated content to go to the end of the block",
                        },
                        {
                          id: "TECH:G124",
                          title:
                            "Adding links at the top of the page to each area of the content",
                        },
                        {
                          id: "TECH:SL25",
                          title:
                            "Using Controls and Programmatic Focus to Bypass Blocks of Content in Silverlight",
                        },
                      ],
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Grouping blocks of repeated material in a way that can be skipped",
                      using: [
                        {
                          id: "TECH:ARIA11",
                          title:
                            "Using ARIA landmarks to identify regions of a page",
                        },
                        {
                          id: "TECH:H69",
                          title:
                            "Providing heading elements at the beginning of each section of content",
                        },
                        {
                          id: "TECH:PDF9",
                          title:
                            "Providing headings by marking content with heading tags in PDF documents",
                        },
                        {
                          and: [
                            {
                              id: "TECH:H70",
                              title:
                                "Using frame elements to group blocks of repeated material",
                            },
                            {
                              id: "TECH:H64",
                              title:
                                "Using the title attribute of the frame and iframe elements",
                            },
                          ],
                        },
                        {
                          id: "TECH:SCR28",
                          title:
                            "Using an expandable and collapsible menu to bypass block of content",
                        },
                        {
                          id: "TECH:SL29",
                          title:
                            'Using Silverlight "List" Controls to Define Blocks that can be Bypassed',
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title:
                        "Providing keyboard access to important links and form controls",
                    },
                    {
                      id: "TECH:future2",
                      title: "Providing skip links to enhance page navigation",
                    },
                    {
                      id: "TECH:future3",
                      title: "Providing access keys",
                    },
                    {
                      id: "TECH:future4",
                      title:
                        "Using accessibility supported technologies which allow structured navigation by user agents and assistive technologies",
                    },
                    {
                      id: "TECH:C6",
                      title: "Positioning content based on structural markup",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:page-titled",
              alt_id: ["navigation-mechanisms-title"],
              num: "2.4.2",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "Page Titled",
              title: "Web pages have titles that describe topic or purpose.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G88",
                      title: "Providing descriptive titles for Web pages",
                      using: [
                        {
                          id: "TECH:H25",
                          title: "Providing a title using the title element",
                        },
                        {
                          id: "TECH:PDF18",
                          title:
                            "Specifying the document title using the Title entry in the document information dictionary of a PDF document",
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:G127",
                      title:
                        "Identifying a Web page's relationship to a larger collection of Web pages",
                    },
                    {
                      id: "TECH:future2",
                      title: "Identifying the subject of the Web page",
                    },
                    {
                      id: "TECH:future3",
                      title:
                        "Providing a meaningful name for identifying frames",
                    },
                    {
                      id: "TECH:future4",
                      title: "Using unique titles for Web pages",
                    },
                    {
                      id: "TECH:future5",
                      title: "Providing a descriptive top-level page heading",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F25",
                      title:
                        "Failure of Success Criterion 2.4.2 due to the title of a Web page not identifying the contents",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:focus-order",
              alt_id: ["navigation-mechanisms-focus-order"],
              num: "2.4.3",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "Focus Order",
              title:
                "If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G59",
                      title:
                        "Placing the interactive elements in an order that follows sequences and relationships within the content",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Giving focus to elements in an order that follows sequences and relationships within the content",
                      using: [
                        {
                          id: "TECH:H4",
                          title:
                            "Creating a logical tab order through links, form controls, and objects",
                        },
                        {
                          id: "TECH:FLASH15",
                          title:
                            "Using the tabIndex property to specify a logical reading order and a logical tab order in Flash",
                        },
                        {
                          id: "TECH:C27",
                          title: "Making the DOM order match the visual order",
                        },
                        {
                          id: "TECH:PDF3",
                          title:
                            "Ensuring correct tab and reading order in PDF documents",
                        },
                        {
                          id: "TECH:SL34",
                          title:
                            "Using the Silverlight Default Tab Sequence and Altering Tab Sequences With Properties",
                        },
                      ],
                    },
                    {
                      id: "TECH:future3",
                      title: "Changing a Web page dynamically",
                      using: [
                        {
                          id: "TECH:SCR26",
                          title:
                            "Inserting dynamic content into the Document Object Model immediately following its trigger element",
                        },
                        {
                          id: "TECH:SCR37",
                          title:
                            "Creating Custom Dialogs in a Device Independent Way",
                        },
                        {
                          id: "TECH:SCR27",
                          title:
                            "Reordering page sections using the Document Object Model",
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title:
                        "Providing a highly visible highlighting mechanism for links or controls when they receive keyboard focus",
                    },
                    {
                      id: "TECH:future2",
                      title: "Creating alternative presentation orders",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F44",
                      title:
                        "Failure of Success Criterion 2.4.3 due to using tabindex to create a tab order that does not preserve meaning and operability",
                    },
                    {
                      id: "TECH:F85",
                      title:
                        "Failure of Success Criterion 2.4.3 due to using dialogs or menus that are not adjacent to their trigger control in the sequential navigation order",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:link-purpose-in-context",
              alt_id: ["navigation-mechanisms-refs"],
              num: "2.4.4",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "Link Purpose (In Context)",
              title:
                "The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G91",
                      title:
                        "Providing link text that describes the purpose of a link",
                    },
                    {
                      id: "TECH:H30",
                      title:
                        "Providing link text that describes the purpose of a link for anchor elements",
                    },
                    {
                      id: "TECH:H24",
                      title:
                        "Providing text alternatives for the area elements of image maps",
                    },
                    {
                      id: "TECH:FLASH27",
                      title:
                        "Providing button labels that describe the purpose of a button",
                    },
                    {
                      id: "TECH:future5",
                      title:
                        "Allowing the user to choose short or long link text",
                      using: [
                        {
                          id: "TECH:G189",
                          title:
                            "Providing a control near the beginning of the Web page that changes the link text",
                        },
                        {
                          id: "TECH:SCR30",
                          title: "Using scripts to change the link text",
                        },
                        {
                          id: "TECH:FLASH7",
                          title: "Using scripting to change control labels",
                        },
                      ],
                    },
                    {
                      id: "TECH:G53",
                      title:
                        "Identifying the purpose of a link using link text combined with the text of the enclosing sentence",
                    },
                    {
                      id: "TECH:future7",
                      title:
                        "Providing a supplemental description of the purpose of a link",
                      using: [
                        {
                          id: "TECH:H33",
                          title:
                            "Supplementing link text with the title attribute",
                        },
                        {
                          id: "TECH:C7",
                          title: "Using CSS to hide a portion of the link text",
                        },
                      ],
                    },
                    {
                      id: "TECH:future8",
                      title:
                        "Identifying the purpose of a link using link text combined with programmatically determined link context",
                      using: [
                        {
                          id: "TECH:ARIA7",
                          title: "Using aria-labelledby for link purpose",
                        },
                        {
                          id: "TECH:ARIA8",
                          title: "Using aria-label for link purpose",
                        },
                        {
                          id: "TECH:H77",
                          title:
                            "Identifying the purpose of a link using link text combined with its enclosing list item",
                        },
                        {
                          id: "TECH:H78",
                          title:
                            "Identifying the purpose of a link using link text combined with its enclosing paragraph",
                        },
                        {
                          id: "TECH:H79",
                          title:
                            "Identifying the purpose of a link in a data table using the link text combined with its enclosing table cell and associated table header cells",
                        },
                        {
                          id: "TECH:H81",
                          title:
                            "Identifying the purpose of a link in a nested list using link text combined with the parent list item under which the list is nested",
                        },
                      ],
                    },
                    {
                      and: [
                        {
                          id: "TECH:G91",
                          title:
                            "Providing link text that describes the purpose of a link",
                        },
                        {
                          id: "TECH:text1",
                          title: "Semantically indicating links",
                          using: [
                            {
                              id: "TECH:PDF11",
                              title:
                                "Providing links and link text using the Link annotation and the /Link structure element in PDF documents",
                            },
                            {
                              id: "TECH:PDF13",
                              title:
                                "Providing replacement text using the /Alt entry for links in PDF documents",
                            },
                            {
                              id: "TECH:SL18",
                              title:
                                "Providing Text Equivalent for Nontext Silverlight Controls With AutomationProperties.Name",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:H2",
                      title:
                        "Combining adjacent image and text links for the same resource",
                    },
                    {
                      id: "TECH:FLASH5",
                      title:
                        "Combining adjacent image and text buttons for the same resource",
                    },
                    {
                      id: "TECH:H80",
                      title:
                        "Identifying the purpose of a link using link text combined with the preceding heading element",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F63",
                      title:
                        "Failure of Success Criterion 2.4.4 due to providing link context only in content that is not related to the link",
                    },
                    {
                      id: "TECH:F89",
                      title:
                        "Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:multiple-ways",
              alt_id: ["navigation-mechanisms-mult-loc"],
              num: "2.4.5",
              versions: ["2.0", "2.1"],
              level: "AA",
              handle: "Multiple Ways",
              title:
                "More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:future1",
                      title: "Using two or more of the following techniques:",
                      using: [
                        {
                          id: "TECH:G125",
                          title:
                            "Providing links to navigate to related Web pages",
                        },
                        {
                          id: "TECH:G64",
                          title: "Providing a Table of Contents",
                        },
                        {
                          id: "TECH:PDF2",
                          title: "Creating bookmarks in PDF documents",
                        },
                        {
                          id: "TECH:G63",
                          title: "Providing a site map",
                        },
                        {
                          id: "TECH:G161",
                          title:
                            "Providing a search function to help users find content",
                        },
                        {
                          id: "TECH:G126",
                          title:
                            "Providing a list of links to all other Web pages",
                        },
                        {
                          id: "TECH:G185",
                          title:
                            "Linking to all of the pages on the site from the home page",
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:H59",
                      title: "Using the link element and navigation tools",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Including information about presentation modes in tables of contents and concept maps",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:headings-and-labels",
              alt_id: ["navigation-mechanisms-descriptive"],
              num: "2.4.6",
              versions: ["2.0", "2.1"],
              level: "AA",
              handle: "Headings and Labels",
              title: "Headings and labels describe topic or purpose.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G130",
                      title: "Providing descriptive headings",
                    },
                    {
                      id: "TECH:G131",
                      title: "Providing descriptive labels",
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title: "Using unique section headings in a Web Page",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Starting section headings with unique information",
                    },
                  ],
                },
              ],
              sufficientNotes: [
                "Headings and labels must be programmatically determined, per <a href='#content-structure-separation-programmatic'>Success Criterion 1.3.1</a>.",
              ],
            },
            {
              id: "WCAG2:focus-visible",
              alt_id: ["navigation-mechanisms-focus-visible"],
              num: "2.4.7",
              versions: ["2.0", "2.1"],
              level: "AA",
              handle: "Focus Visible",
              title:
                "Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G149",
                      title:
                        "Using user interface components that are highlighted by the user agent when they receive focus",
                    },
                    {
                      id: "TECH:C15",
                      title:
                        "Using CSS to change the presentation of a user interface component when it receives focus",
                    },
                    {
                      id: "TECH:G165",
                      title:
                        "Using the default focus indicator for the platform so that high visibility default focus indicators will carry over",
                    },
                    {
                      id: "TECH:G195",
                      title:
                        "Using an author-supplied, highly visible focus indicator",
                    },
                    {
                      id: "TECH:SCR31",
                      title:
                        "Using script to change the background color or border of the element with focus",
                    },
                    {
                      id: "TECH:FLASH20",
                      title:
                        "Reskinning Flash components to provide highly visible focus indication",
                    },
                    {
                      id: "TECH:SL2",
                      title:
                        "Changing The Visual Focus Indicator in Silverlight",
                    },
                    {
                      id: "TECH:SL7",
                      title:
                        "Designing a Focused Visual State for Custom Silverlight Controls",
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title:
                        "Highlighting a link or control when the mouse hovers over it",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Providing a highly visible highlighting mechanism for links or controls when they receive keyboard focus",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F55",
                      title:
                        "Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received",
                    },
                    {
                      id: "TECH:F78",
                      title:
                        "Failure of Success Criterion 2.4.7 due to styling element outlines and borders in a way that removes or renders non-visible the visual focus indicator",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:location",
              alt_id: ["navigation-mechanisms-location"],
              num: "2.4.8",
              versions: ["2.0", "2.1"],
              level: "AAA",
              handle: "Location",
              title:
                "Information about the user's location within a set of Web pages is available.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G65",
                      title: "Providing a breadcrumb trail",
                    },
                    {
                      id: "TECH:G63",
                      title: "Providing a site map",
                    },
                    {
                      id: "TECH:G128",
                      title:
                        "Indicating current location within navigation bars",
                    },
                    {
                      id: "TECH:G127",
                      title:
                        "Identifying a Web page's relationship to a larger collection of Web pages",
                      using: [
                        {
                          id: "TECH:H59",
                          title: "Using the link element and navigation tools",
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:PDF14",
                      title:
                        "Providing running headers and footers in PDF documents",
                    },
                    {
                      id: "TECH:PDF17",
                      title:
                        "Specifying consistent page numbering for PDF documents",
                    },
                    {
                      id: "TECH:future3",
                      title: "Providing a link to the home page or main page",
                    },
                    {
                      id: "TECH:future4",
                      title:
                        "Providing an easy-to-read version of information about the organization of a set of Web pages",
                    },
                    {
                      id: "TECH:future5",
                      title:
                        "Providing a sign language version of information about the organization of a set of Web pages",
                    },
                    {
                      id: "TECH:future6",
                      title:
                        "Providing an easy-to-read summary at the beginning of each section of content",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:link-purpose-link-only",
              alt_id: ["navigation-mechanisms-link"],
              num: "2.4.9",
              versions: ["2.0", "2.1"],
              level: "AAA",
              handle: "Link Purpose (Link Only)",
              title:
                "A mechanism is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be ambiguous to users in general.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:ARIA8",
                      title: "Using aria-label for link purpose",
                    },
                    {
                      id: "TECH:G91",
                      title:
                        "Providing link text that describes the purpose of a link",
                    },
                    {
                      id: "TECH:H30",
                      title:
                        "Providing link text that describes the purpose of a link for anchor elements",
                    },
                    {
                      id: "TECH:H24",
                      title:
                        "Providing text alternatives for the area elements of image maps",
                    },
                    {
                      id: "TECH:FLASH27",
                      title:
                        "Providing button labels that describe the purpose of a button",
                    },
                    {
                      id: "TECH:future6",
                      title:
                        "Allowing the user to choose short or long link text",
                      using: [
                        {
                          id: "TECH:G189",
                          title:
                            "Providing a control near the beginning of the Web page that changes the link text",
                        },
                        {
                          id: "TECH:SCR30",
                          title: "Using scripts to change the link text",
                        },
                        {
                          id: "TECH:FLASH7",
                          title: "Using scripting to change control labels",
                        },
                      ],
                    },
                    {
                      id: "TECH:future7",
                      title:
                        "Providing a supplemental description of the purpose of a link",
                      using: [
                        {
                          id: "TECH:C7",
                          title: "Using CSS to hide a portion of the link text",
                        },
                      ],
                    },
                    {
                      id: "TECH:future8",
                      title: "Semantically indicating links",
                      using: [
                        {
                          id: "TECH:PDF11",
                          title:
                            "Providing links and link text using the Link annotation and the /Link structure element in PDF documents",
                        },
                        {
                          id: "TECH:PDF13",
                          title:
                            "Providing replacement text using the /Alt entry for links in PDF documents",
                        },
                        {
                          id: "TECH:SL18",
                          title:
                            "Providing Text Equivalent for Nontext Silverlight Controls With AutomationProperties.Name",
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:H2",
                      title:
                        "Combining adjacent image and text links for the same resource",
                    },
                    {
                      id: "TECH:FLASH5",
                      title:
                        "Combining adjacent image and text buttons for the same resource",
                    },
                    {
                      id: "TECH:H33",
                      title: "Supplementing link text with the title attribute",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F84",
                      title:
                        'Failure of Success Criterion 2.4.9 due to using a non-specific link such as "click here" or "more" without a mechanism to change the link text to specific text.',
                    },
                    {
                      id: "TECH:F89",
                      title:
                        "Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:section-headings",
              alt_id: ["navigation-mechanisms-headings"],
              num: "2.4.10",
              versions: ["2.0", "2.1"],
              level: "AAA",
              handle: "Section Headings",
              title: "Section headings are used to organize the content.",
              details: [
                {
                  type: "note",
                  handle: "Note 1",
                  text: '"Heading" is used in its general sense and includes titles and other ways to add a heading to different types of content.',
                },
                {
                  type: "note",
                  handle: "Note 2",
                  text: "This success criterion covers sections within writing, not user interface components. User Interface components are covered under Success Criterion 4.1.2.",
                },
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G141",
                      title: "Organizing a page using headings",
                    },
                    {
                      id: "TECH:H69",
                      title:
                        "Providing heading elements at the beginning of each section of content",
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title:
                        "Using the 'live' property to mark live regions (ARIA)",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Providing mechanisms to navigate to different sections of the content of a Web page",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "WCAG2:input-modalities",
          alt_id: [],
          num: "2.5",
          versions: ["2.1"],
          handle: "Input Modalities",
          title:
            "Make it easier for users to operate functionality through various inputs beyond keyboard.",
          successcriteria: [
            {
              id: "WCAG2:pointer-gestures",
              alt_id: [],
              num: "2.5.1",
              versions: ["2.1"],
              level: "A",
              handle: "Pointer Gestures",
              title:
                "All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.",
            },
            {
              id: "WCAG2:pointer-cancellation",
              alt_id: [],
              num: "2.5.2",
              versions: ["2.1"],
              level: "A",
              handle: "Pointer Cancellation",
              title:
                "For functionality that can be operated using a single pointer, at least one of the following is true:",
              details: [
                {
                  type: "ulist",
                  items: [
                    {
                      handle: "No Down-Event",
                      text: "The down-event of the pointer is not used to execute any part of the function;",
                    },
                    {
                      handle: "Abort or Undo",
                      text: "Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion;",
                    },
                    {
                      handle: "Up Reversal",
                      text: "The up-event reverses any outcome of the preceding down-event;",
                    },
                    {
                      handle: "Essential",
                      text: "Completing the function on the down-event is essential.",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:label-in-name",
              alt_id: [],
              num: "2.5.3",
              versions: ["2.1"],
              level: "A",
              handle: "Label in Name",
              title:
                "For user interface components with labels that include text or images of text, the name contains the text that is presented visually.",
            },
            {
              id: "WCAG2:motion-actuation",
              alt_id: [],
              num: "2.5.4",
              versions: ["2.1"],
              level: "A",
              handle: "Motion Actuation",
              title:
                "Functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when:",
              details: [
                {
                  type: "ulist",
                  items: [
                    {
                      handle: "Supported Interface",
                      text: "The motion is used to operate functionality through an accessibility supported interface;",
                    },
                    {
                      handle: "Essential",
                      text: "The motion is essential for the function and doing so would invalidate the activity.",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:target-size",
              alt_id: [],
              num: "2.5.5",
              versions: ["2.1"],
              level: "AAA",
              handle: "Target Size",
              title:
                "The size of the target for pointer inputs is at least 44 by 44 CSS pixels except when:",
              details: [
                {
                  type: "ulist",
                  items: [
                    {
                      handle: "Equivalent",
                      text: "The target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels;",
                    },
                    {
                      handle: "Inline",
                      text: "The target is in a sentence or block of text;",
                    },
                    {
                      handle: "User Agent Control",
                      text: "The size of the target is determined by the user agent and is not modified by the author;",
                    },
                    {
                      handle: "Essential",
                      text: "A particular presentation of the target is essential to the information being conveyed.",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:concurrent-input-mechanisms",
              alt_id: [],
              num: "2.5.6",
              versions: ["2.1"],
              level: "AAA",
              handle: "Concurrent Input Mechanisms",
              title:
                "Web content does not restrict use of input modalities available on a platform except where the restriction is essential, required to ensure the security of the content, or required to respect user settings.",
            },
          ],
        },
      ],
    },
    {
      id: "WCAG2:understandable",
      num: "3",
      versions: ["2.0", "2.1"],
      handle: "Understandable",
      title:
        "Information and the operation of user interface must be understandable.",
      guidelines: [
        {
          id: "WCAG2:readable",
          alt_id: ["meaning"],
          num: "3.1",
          versions: ["2.0", "2.1"],
          handle: "Readable",
          title: "Make text content readable and understandable.",
          techniques: [
            {
              advisory: [
                {
                  id: "TECH:future1",
                  title:
                    "Setting expectations about content in the page from uncontrolled sources",
                },
                {
                  id: "TECH:future2",
                  title:
                    "Providing sign language interpretation for all content",
                },
                {
                  id: "TECH:future3",
                  title:
                    "Using the clearest and simplest language appropriate for the content",
                },
                {
                  id: "TECH:future4",
                  title: "Avoiding centrally aligned text",
                },
                {
                  id: "TECH:future5",
                  title:
                    "Avoiding text that is fully justified (to both left and right margins) in a way that causes poor spacing between words or characters",
                },
                {
                  id: "TECH:future6",
                  title:
                    "Using left-justified text for languages that are written left to right and right-justified text for languages that are written right-to-left",
                },
                {
                  id: "TECH:future7",
                  title: "Limiting text column width",
                },
                {
                  id: "TECH:future8",
                  title: "Avoiding chunks of italic text",
                },
                {
                  id: "TECH:future9",
                  title:
                    "Avoiding overuse of different styles on individual pages and in sites",
                },
                {
                  id: "TECH:future10",
                  title: "Making links visually distinct",
                },
                {
                  id: "TECH:future11",
                  title:
                    "Using images, illustrations, video, audio, or symbols to clarify meaning",
                },
                {
                  id: "TECH:future12",
                  title: "Providing practical examples to clarify content",
                },
                {
                  id: "TECH:future13",
                  title:
                    "Using a light pastel background rather than a white background behind black text",
                },
                {
                  id: "TECH:future14",
                  title:
                    "Avoiding the use of unique interface controls unnecessarily",
                },
                {
                  id: "TECH:future15",
                  title:
                    "Using upper and lower case according to the spelling rules of the text language",
                },
                {
                  id: "TECH:future16",
                  title: "Avoiding unusual foreign words",
                },
                {
                  id: "TECH:future17",
                  title:
                    "Providing sign language versions of information, ideas, and processes that must be understood in order to use the content",
                },
                {
                  id: "TECH:future18",
                  title:
                    "Making any reference to a location in a Web page into a link to that location",
                },
                {
                  id: "TECH:future19",
                  title:
                    "Making references to a heading or title include the full text of the title",
                },
                {
                  id: "TECH:future20",
                  title:
                    "Providing easy-to-read versions of basic information about a set of Web pages, including information about how to contact the Webmaster",
                },
                {
                  id: "TECH:future21",
                  title:
                    "Providing a sign language version of basic information about a set of Web pages, including information about how to contact the Webmaster",
                },
              ],
            },
          ],
          successcriteria: [
            {
              id: "WCAG2:language-of-page",
              alt_id: ["meaning-doc-lang-id"],
              num: "3.1.1",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "Language of Page",
              title:
                "The default human language of each Web page can be programmatically determined.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:H57",
                      title: "Using language attributes on the html element",
                    },
                    {
                      id: "TECH:FLASH13",
                      title:
                        "Using HTML language attributes to specify language in Flash content",
                    },
                    {
                      id: "TECH:PDF16",
                      title:
                        "Setting the default language using the /Lang entry in the document catalog of a PDF document",
                    },
                    {
                      id: "TECH:PDF19",
                      title:
                        "Specifying the language for a passage or phrase with the Lang entry in PDF documents",
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:SVR5",
                      title:
                        "Specifying the default language in the HTTP header",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Using http or the Content-Language meta tag for metadata",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:language-of-parts",
              alt_id: ["meaning-other-lang-id"],
              num: "3.1.2",
              versions: ["2.0", "2.1"],
              level: "AA",
              handle: "Language of Parts",
              title:
                "The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:H58",
                      title:
                        "Using language attributes to identify changes in the human language",
                    },
                    {
                      id: "TECH:FLASH13",
                      title:
                        "Using HTML language attributes to specify language in Flash content",
                    },
                    {
                      id: "TECH:PDF19",
                      title:
                        "Specifying the language for a passage or phrase with the Lang entry in PDF documents",
                    },
                    {
                      id: "TECH:SL4",
                      title:
                        "Declaring Discrete Silverlight Objects to Specify Language Parts in the HTML DOM",
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:SL27",
                      title:
                        "Using Language/Culture Properties as Exposed by Silverlight Applications and Assistive Technologies",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Making text that is not in the default human language of the Web page visually distinct",
                    },
                    {
                      id: "TECH:future3",
                      title:
                        "Giving the names of any languages used in foreign passages or phrases",
                    },
                    {
                      id: "TECH:future4",
                      title:
                        "Providing language markup on proper names to facilitate correct pronunciation by screen readers",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:unusual-words",
              alt_id: ["meaning-idioms"],
              num: "3.1.3",
              versions: ["2.0", "2.1"],
              level: "AAA",
              handle: "Unusual Words",
              title:
                "A mechanism is available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.",
              techniques: [
                {
                  sufficient: [
                    {
                      situations: [
                        {
                          title:
                            "Situation A: If the word or phrase has a unique meaning within the Web page:",
                          techniques: [
                            {
                              id: "TECH:G101",
                              title:
                                "Providing the definition of a word or phrase used in an unusual or restricted way",
                              using: [
                                {
                                  id: "TECH:G55",
                                  title: "Linking to definitions",
                                  using: [
                                    {
                                      id: "TECH:H40",
                                      title: "Using definition lists",
                                    },
                                    {
                                      id: "TECH:H60",
                                      title:
                                        "Using the link element to link to a glossary",
                                    },
                                  ],
                                },
                                {
                                  id: "TECH:G112",
                                  title: "Using inline definitions",
                                  using: [
                                    {
                                      id: "TECH:H54",
                                      title:
                                        "Using the dfn element to identify the defining instance of a word",
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              id: "TECH:G101",
                              title:
                                "Providing the definition of a word or phrase used in an unusual or restricted way",
                              using: [
                                {
                                  id: "TECH:G55",
                                  title: "Linking to definitions",
                                  using: [
                                    {
                                      id: "TECH:H40",
                                      title: "Using definition lists",
                                    },
                                    {
                                      id: "TECH:H60",
                                      title:
                                        "Using the link element to link to a glossary",
                                    },
                                  ],
                                },
                                {
                                  id: "TECH:G62",
                                  title: "Providing a glossary",
                                },
                                {
                                  id: "TECH:G70",
                                  title:
                                    "Providing a function to search an online dictionary",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title:
                            "Situation B: If the word or phrase means different things within the same Web page:",
                          techniques: [
                            {
                              id: "TECH:G101",
                              title:
                                "Providing the definition of a word or phrase used in an unusual or restricted way",
                              using: [
                                {
                                  id: "TECH:G55",
                                  title: "Linking to definitions",
                                  using: [
                                    {
                                      id: "TECH:H40",
                                      title: "Using definition lists",
                                    },
                                    {
                                      id: "TECH:H60",
                                      title:
                                        "Using the link element to link to a glossary",
                                    },
                                  ],
                                },
                                {
                                  id: "TECH:G112",
                                  title: "Using inline definitions",
                                  using: [
                                    {
                                      id: "TECH:H54",
                                      title:
                                        "Using the dfn element to identify the defining instance of a word",
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title:
                        "Using markup and visual formatting to help users recognize words that have special meaning",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Providing a voice-enabled dictionary search so that users who have difficulty typing or spelling can speak the word whose definition they need",
                    },
                    {
                      id: "TECH:future3",
                      title:
                        "Providing a sign language dictionary to help users who are deaf find the necessary definitions",
                    },
                    {
                      id: "TECH:future4",
                      title:
                        "Providing a mechanism for finding definitions for all words in text content",
                    },
                    {
                      id: "TECH:future5",
                      title:
                        "Providing a mechanism to determine the meaning of each word or phrase in text content",
                    },
                    {
                      id: "TECH:future6",
                      title: "Avoiding unusual foreign words",
                    },
                    {
                      id: "TECH:future7",
                      title:
                        "Using a series of dictionaries in cascading fashion to provide meanings",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:abbreviations",
              alt_id: ["meaning-located"],
              num: "3.1.4",
              versions: ["2.0", "2.1"],
              level: "AAA",
              handle: "Abbreviations",
              title:
                "A mechanism for identifying the expanded form or meaning of abbreviations is available.",
              techniques: [
                {
                  sufficient: [
                    {
                      situations: [
                        {
                          title:
                            "Situation A: If the abbreviation has only one meaning within the Web page:",
                          techniques: [
                            {
                              id: "TECH:G102",
                              title:
                                "Providing the expansion or explanation of an abbreviation",
                              using: [
                                {
                                  id: "TECH:G97",
                                  title:
                                    "Providing the first use of an abbreviation immediately before or after the expanded form",
                                },
                                {
                                  id: "TECH:G55",
                                  title: "Linking to definitions",
                                },
                                {
                                  id: "TECH:H28",
                                  title:
                                    "Providing definitions for abbreviations by using the abbr element",
                                },
                                {
                                  id: "TECH:PDF8",
                                  title:
                                    "Providing definitions for abbreviations via an E entry for a structure element",
                                },
                              ],
                            },
                            {
                              id: "TECH:G102",
                              title:
                                "Providing the expansion or explanation of an abbreviation",
                              using: [
                                {
                                  id: "TECH:G55",
                                  title: "Linking to definitions",
                                },
                                {
                                  id: "TECH:G62",
                                  title: "Providing a glossary",
                                },
                                {
                                  id: "TECH:H60",
                                  title:
                                    "Using the link element to link to a glossary",
                                },
                                {
                                  id: "TECH:G70",
                                  title:
                                    "Providing a function to search an online dictionary",
                                },
                                {
                                  id: "TECH:H28",
                                  title:
                                    "Providing definitions for abbreviations by using the abbr element",
                                },
                                {
                                  id: "TECH:PDF8",
                                  title:
                                    "Providing definitions for abbreviations via an E entry for a structure element",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title:
                            "Situation B: If the abbreviation means different things within the same Web page:",
                          techniques: [
                            {
                              id: "TECH:G102",
                              title:
                                "Providing the expansion or explanation of an abbreviation",
                              using: [
                                {
                                  id: "TECH:G55",
                                  title: "Linking to definitions",
                                },
                                {
                                  id: "TECH:H28",
                                  title:
                                    "Providing definitions for abbreviations by using the abbr element",
                                },
                                {
                                  id: "TECH:PDF8",
                                  title:
                                    "Providing definitions for abbreviations via an E entry for a structure element",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title: "Using unique abbreviations in a Web page",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Using visual formatting to help users recognize abbreviations",
                    },
                    {
                      id: "TECH:future3",
                      title:
                        "Providing access to a talking dictionary to support users who might have difficulty decoding written definitions",
                    },
                    {
                      id: "TECH:future4",
                      title:
                        "Providing a voice-enabled dictionary search so that users who have difficulty typing or spelling can speak the word whose definition they need",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:reading-level",
              alt_id: ["meaning-supplements"],
              num: "3.1.5",
              versions: ["2.0", "2.1"],
              level: "AAA",
              handle: "Reading Level",
              title:
                "When text requires reading ability more advanced than the lower secondary education level after removal of proper names and titles, supplemental content, or a version that does not require reading ability more advanced than the lower secondary education level, is available.",
              sufficientNotes: [
                "Different sites may address this Success Criterion in different ways. An audio version of the content may be helpful to some users. For some people who are deaf, a sign language version of the page may be easier to understand than a written language version since sign language may be their first language. Some sites may decide to do both or other combinations. No technique will help all users who have difficulty. So different techniques are provided as sufficient techniques here for authors trying to make their sites more accessible. Any numbered technique or combination above can be used by a particular site and it is considered sufficient by the Working Group.",
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G86",
                      title:
                        "Providing a text summary that can be understood by people with lower secondary education level reading ability",
                    },
                    {
                      id: "TECH:G103",
                      title:
                        "Providing visual illustrations, pictures, and symbols to help explain ideas, events, and processes",
                    },
                    {
                      id: "TECH:G79",
                      title: "Providing a spoken version of the text",
                    },
                    {
                      id: "TECH:G153",
                      title: "Making the text easier to read",
                    },
                    {
                      id: "TECH:G160",
                      title:
                        "Providing sign language versions of information, ideas, and processes that must be understood in order to use the content",
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title:
                        "Providing text for navigational and landing pages that requires reading ability that is less advanced than the lower secondary education level",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Providing text for interior pages that requires reading ability at the lower secondary education level",
                    },
                    {
                      id: "TECH:future3",
                      title: "Including content summaries in metadata",
                    },
                    {
                      id: "TECH:future4",
                      title:
                        "Using the clearest and simplest language appropriate for the content",
                    },
                    {
                      id: "TECH:future5",
                      title:
                        "Using RDF to associate supplements with primary content",
                    },
                    {
                      id: "TECH:future6",
                      title:
                        "Providing a clear representational image on the site's home page",
                    },
                    {
                      id: "TECH:future7",
                      title:
                        "Clearly marking, by use of text or icon, content which has been optimized for easy reading",
                    },
                    {
                      id: "TECH:future8",
                      title:
                        "Using sentences that contain no redundant words, that is, words that do not change the meaning of the sentence",
                    },
                    {
                      id: "TECH:future9",
                      title:
                        "Using sentences that contain no more than two conjunctions",
                    },
                    {
                      id: "TECH:future10",
                      title:
                        "Using sentences that are no longer than the typical accepted length for secondary education (Note: In English that is 25 words)",
                    },
                    {
                      id: "TECH:future11",
                      title:
                        "Using sentences that do not contain complex words or phrases that could be replaced with more commonly used words without changing the meaning of the sentence",
                    },
                    {
                      id: "TECH:future12",
                      title:
                        "Providing summaries for different sections of text",
                    },
                    {
                      id: "TECH:future13",
                      title:
                        "Using metadata to associate alternatives at different reading levels.",
                    },
                    {
                      id: "TECH:future14",
                      title:
                        "Using the Dublin Core accessibility element to associate text content with text, graphical, or spoken supplements",
                    },
                    {
                      id: "TECH:future15",
                      title:
                        "Using the ISO AfA accessibility element to associate text content with text, graphical, or spoken supplements",
                    },
                    {
                      id: "TECH:future16",
                      title:
                        "Using the IMS accessibility element to associate text content with text, graphical, or spoken supplements",
                    },
                    {
                      id: "TECH:future17",
                      title: "Making metadata viewable by humans",
                      using: [
                        {
                          id: "TECH:future1",
                          title:
                            "EXAMPLE: Providing, in metadata, URI(s) that point to a pre-primary-reading-level and a primary-reading-level text transcript of a new scientific discovery advanced-reading-level article.",
                        },
                      ],
                    },
                    {
                      id: "TECH:future18",
                      title:
                        "Providing progressive complexity for site and page content",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:pronunciation",
              alt_id: ["meaning-pronunciation"],
              num: "3.1.6",
              versions: ["2.0", "2.1"],
              level: "AAA",
              handle: "Pronunciation",
              title:
                "A mechanism is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G120",
                      title:
                        "Providing the pronunciation immediately following the word",
                    },
                    {
                      id: "TECH:G121",
                      title: "Linking to pronunciations",
                    },
                    {
                      id: "TECH:G62",
                      title: "Providing a glossary",
                    },
                    {
                      id: "TECH:G163",
                      title:
                        "Using standard diacritical marks that can be turned off",
                    },
                    {
                      id: "TECH:H62",
                      title: "Using the ruby element",
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title:
                        "Providing pronunciations in a sound file, so that users can listen to the pronunciations of the word",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Providing a mechanism for finding pronunciations for all foreign words in text content",
                    },
                    {
                      id: "TECH:future3",
                      title:
                        "Providing a mechanism to determine the pronunciations of each word or phrase in text content",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "WCAG2:predictable",
          alt_id: ["consistent-behavior"],
          num: "3.2",
          versions: ["2.0", "2.1"],
          handle: "Predictable",
          title: "Make Web pages appear and operate in predictable ways.",
          techniques: [
            {
              advisory: [
                {
                  id: "TECH:future1",
                  title:
                    "Positioning labels to maximize predictability of relationships",
                },
              ],
            },
          ],
          successcriteria: [
            {
              id: "WCAG2:on-focus",
              alt_id: ["consistent-behavior-receive-focus"],
              num: "3.2.1",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "On Focus",
              title:
                "When any component receives focus, it does not initiate a change of context.",
              sufficientNotes: [
                "A change of content is not always a change of context. This success criterion is automatically met if changes in content are not also changes of context.",
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G107",
                      title:
                        'Using "activate" rather than "focus" as a trigger for changes of context',
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title:
                        "Not causing persistent changes of state or value when a component receives focus, or providing an alternate means to reset any changes",
                    },
                    {
                      id: "TECH:G200",
                      title:
                        "Opening new windows and tabs from a link only when necessary",
                    },
                    {
                      id: "TECH:G201",
                      title:
                        "Giving users advanced warning when opening a new window",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F52",
                      title:
                        "Failure of Success Criterion 3.2.1 and 3.2.5 due to opening a new window as soon as a new page is loaded",
                    },
                    {
                      id: "TECH:F55",
                      title:
                        "Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:on-input",
              alt_id: ["consistent-behavior-unpredictable-change"],
              num: "3.2.2",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "On Input",
              title:
                "Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.",
              sufficientNotes: [
                "A change of content is not always a change of context. This success criterion is automatically met if changes in content are not also changes of context.",
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G80",
                      title:
                        "Providing a submit button to initiate a change of context",
                      using: [
                        {
                          id: "TECH:H32",
                          title: "Providing submit buttons",
                        },
                        {
                          id: "TECH:H84",
                          title:
                            "Using a button with a select element to perform an action",
                        },
                        {
                          id: "TECH:FLASH4",
                          title: "Providing submit buttons in Flash",
                        },
                        {
                          id: "TECH:PDF15",
                          title:
                            "Providing submit buttons with the submit-form action in PDF forms",
                        },
                        {
                          id: "TECH:SL10",
                          title:
                            "Implementing a Submit-Form Pattern in Silverlight",
                        },
                      ],
                    },
                    {
                      id: "TECH:G13",
                      title:
                        "Describing what will happen before a change to a form control that causes a change of context to occur is made",
                    },
                    {
                      id: "TECH:SCR19",
                      title:
                        "Using an onchange event on a select element without causing a change of context",
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:G201",
                      title:
                        "Giving users advanced warning when opening a new window",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F36",
                      title:
                        "Failure of Success Criterion 3.2.2 due to automatically submitting a form and presenting new content without prior warning when the last field in the form is given a value",
                    },
                    {
                      id: "TECH:F37",
                      title:
                        "Failure of Success Criterion 3.2.2 due to launching a new window without prior warning when the selection of a radio button, check box or select list is changed",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:consistent-navigation",
              alt_id: ["consistent-behavior-consistent-locations"],
              num: "3.2.3",
              versions: ["2.0", "2.1"],
              level: "AA",
              handle: "Consistent Navigation",
              title:
                "Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.",
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G61",
                      title:
                        "Presenting repeated components in the same relative order each time they appear",
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:PDF14",
                      title:
                        "Providing running headers and footers in PDF documents",
                    },
                    {
                      id: "TECH:PDF17",
                      title:
                        "Specifying consistent page numbering for PDF documents",
                    },
                    {
                      id: "TECH:future3",
                      title:
                        "Using templates to ensure consistency across multiple Web pages",
                    },
                    {
                      id: "TECH:future4",
                      title:
                        "Creating layout, positioning, layering, and alignment",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F66",
                      title:
                        "Failure of Success Criterion 3.2.3 due to presenting navigation links in a different relative order on different pages",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:consistent-identification",
              alt_id: ["consistent-behavior-consistent-functionality"],
              num: "3.2.4",
              versions: ["2.0", "2.1"],
              level: "AA",
              handle: "Consistent Identification",
              title:
                "Components that have the same functionality within a set of Web pages are identified consistently.",
              sufficientNotes: [
                "Text alternatives that are “consistent” are not always “identical.” For instance, you may have an graphical arrow at the bottom of a Web page that links to the next Web page. The text alternative may say “Go to page 4.” Naturally, it would not be appropriate to repeat this exact text alternative on the next Web page. It would be more appropriate to say “Go to page 5”. Although these text alternatives would not be identical, they would be consistent, and therefore would satisfy this Success Criterion.",
                "A single non-text-content-item may be used to serve different functions. In such cases, different text alternatives are necessary and should be used. Examples can be commonly found with the use of icons such as check marks, cross marks, and traffic signs. Their functions can be different depending on the context of the Web page. A check mark icon may function as “approved”, “completed”, or “included”, to name a few, depending on the situation. Using “check mark” as text alternative across all Web pages does not help users understand the function of the icon. Different text alternatives can be used when the same non-text content serves multiple functions.",
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      and: [
                        {
                          id: "TECH:G197",
                          title:
                            "Using labels, names, and text alternatives consistently for content that has the same functionality",
                        },
                        {
                          id: "TECH:text1",
                          title:
                            "following the <a href='#text-equiv-all'>sufficient techniques for Success Criterion 1.1.1</a> and <a href='#ensure-compat-rsv'>sufficient techniques for Success Criterion 4.1.2</a> for providing labels, names, and text alternatives",
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title:
                        "Ensuring that the text alternative conveys the function of the component and what will happen when the user activates it",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Using the same non-text content for a given function whenever possible",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F31",
                      title:
                        "Failure of Success Criterion 3.2.4 due to using two different labels for the same function on different Web pages within a set of Web pages",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:change-on-request",
              alt_id: ["consistent-behavior-no-extreme-changes-context"],
              num: "3.2.5",
              versions: ["2.0", "2.1"],
              level: "AAA",
              handle: "Change on Request",
              title:
                "Changes of context are initiated only by user request or a mechanism is available to turn off such changes.",
              techniques: [
                {
                  sufficient: [
                    {
                      situations: [
                        {
                          title:
                            "Situation A: If the Web page allows automatic updates:",
                          techniques: [
                            {
                              id: "TECH:G76",
                              title:
                                "Providing a mechanism to request an update of the content instead of updating automatically",
                            },
                          ],
                        },
                        {
                          title:
                            "Situation B: If automatic redirects are possible:",
                          techniques: [
                            {
                              id: "TECH:SVR1",
                              title:
                                "Implementing automatic redirects on the server side instead of on the client side",
                            },
                            {
                              id: "TECH:G110",
                              title: "Using an instant client-side redirect",
                              using: [
                                {
                                  id: "TECH:H76",
                                  title:
                                    "Using meta refresh to create an instant client-side redirect",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title:
                            "Situation C: If the Web page uses pop-up windows:",
                          techniques: [
                            {
                              id: "TECH:future1",
                              title: "Including pop-up windows",
                              using: [
                                {
                                  id: "TECH:H83",
                                  title:
                                    "Using the target attribute to open a new window on user request and indicating this in link text",
                                },
                                {
                                  id: "TECH:SCR24",
                                  title:
                                    "Using progressive enhancement to open new windows on user request",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title:
                            "Situation D: If using an onchange event on a select element:",
                          techniques: [
                            {
                              id: "TECH:SCR19",
                              title:
                                "Using an onchange event on a select element without causing a change of context",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title:
                        "Opening new windows by providing normal hyperlinks without the target attribute, because many user agents allow users to open links in another window or tab.",
                    },
                    {
                      id: "TECH:G200",
                      title:
                        "Opening new windows and tabs from a link only when necessary",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F9",
                      title:
                        "Failure of Success Criterion 3.2.5 due to changing the context when the user removes focus from a form element",
                    },
                    {
                      id: "TECH:F22",
                      title:
                        "Failure of Success Criterion 3.2.5 due to opening windows that are not requested by the user",
                    },
                    {
                      id: "TECH:F41",
                      title:
                        "Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh to reload the page",
                    },
                    {
                      id: "TECH:F52",
                      title:
                        "Failure of Success Criterion 3.2.1 and 3.2.5 due to opening a new window as soon as a new page is loaded",
                    },
                    {
                      id: "TECH:F60",
                      title:
                        "Failure of Success Criterion 3.2.5 due to launching a new window when a user enters text into an input field",
                    },
                    {
                      id: "TECH:F61",
                      title:
                        "Failure of Success Criterion 3.2.5 due to complete change of main content through an automatic update that the user cannot disable from within the content",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "WCAG2:input-assistance",
          alt_id: ["minimize-error"],
          num: "3.3",
          versions: ["2.0", "2.1"],
          handle: "Input Assistance",
          title: "Help users avoid and correct mistakes.",
          techniques: [
            {
              advisory: [
                {
                  id: "TECH:future1",
                  title: "Hiding optional form fields",
                },
              ],
            },
          ],
          successcriteria: [
            {
              id: "WCAG2:error-identification",
              alt_id: ["minimize-error-identified"],
              num: "3.3.1",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "Error Identification",
              title:
                "If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.",
              techniques: [
                {
                  sufficient: [
                    {
                      situations: [
                        {
                          title:
                            "Situation A: If a form contains fields for which information from the user is mandatory.",
                          techniques: [
                            {
                              id: "TECH:G83",
                              title:
                                "Providing text descriptions to identify required fields that were not completed",
                            },
                            {
                              id: "TECH:ARIA21",
                              title:
                                "Using Aria-Invalid to Indicate An Error Field",
                            },
                            {
                              id: "TECH:SCR18",
                              title:
                                "Providing client-side validation and alert",
                            },
                            {
                              id: "TECH:PDF5",
                              title:
                                "Indicating required form controls in PDF forms",
                            },
                            {
                              id: "TECH:SL35",
                              title:
                                "Using the Validation and ValidationSummary APIs to Implement Client Side Forms Validation in Silverlight",
                            },
                          ],
                        },
                        {
                          title:
                            "Situation B: If information provided by the user is required to be in a specific data format or of certain values.",
                          techniques: [
                            {
                              id: "TECH:ARIA18",
                              title:
                                "Using aria-alertdialog to Identify Errors",
                            },
                            {
                              id: "TECH:ARIA19",
                              title:
                                "Using ARIA role=alert or Live Regions to Identify Errors",
                            },
                            {
                              id: "TECH:ARIA21",
                              title:
                                "Using Aria-Invalid to Indicate An Error Field",
                            },
                            {
                              id: "TECH:G84",
                              title:
                                "Providing a text description when the user provides information that is not in the list of allowed values",
                            },
                            {
                              id: "TECH:G85",
                              title:
                                "Providing a text description when user input falls outside the required format or values",
                            },
                            {
                              id: "TECH:SCR18",
                              title:
                                "Providing client-side validation and alert",
                            },
                            {
                              id: "TECH:SCR32",
                              title:
                                "Providing client-side validation and adding error text via the DOM",
                            },
                            {
                              id: "TECH:FLASH12",
                              title:
                                "Providing client-side validation and adding error text via the accessible description",
                            },
                            {
                              id: "TECH:PDF22",
                              title:
                                "Indicating when user input falls outside the required format or values in PDF forms",
                            },
                            {
                              id: "TECH:SL35",
                              title:
                                "Using the Validation and ValidationSummary APIs to Implement Client Side Forms Validation in Silverlight",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:G139",
                      title:
                        "Creating a mechanism that allows users to jump to errors",
                    },
                    {
                      id: "TECH:future2",
                      title: "Validating form submissions on the server",
                    },
                    {
                      id: "TECH:future3",
                      title: "Re-displaying a form with a summary of errors",
                    },
                    {
                      id: "TECH:future4",
                      title:
                        "Providing error notification as the user enters information",
                    },
                    {
                      id: "TECH:future5",
                      title:
                        "Including error notification information in the page title",
                    },
                    {
                      id: "TECH:future6",
                      title:
                        "Highlighting or visually emphasizing errors where they occur",
                    },
                    {
                      id: "TECH:future7",
                      title:
                        "Supplementing text with non-text content when reporting errors",
                    },
                    {
                      id: "TECH:G199",
                      title:
                        "Providing success feedback when data is submitted successfully",
                    },
                    {
                      id: "TECH:future9",
                      title: "Using sounds to focus user's attention",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:labels-or-instructions",
              alt_id: ["minimize-error-cues"],
              num: "3.3.2",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "Labels or Instructions",
              title:
                "Labels or instructions are provided when content requires user input.",
              sufficientNotes: [
                "The techniques at the end of the above list should be considered “last resort” and only used when the other techniques cannot be applied to the page. The earlier techniques are preferred because they increase accessibility to a wider user group.",
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G131",
                      title: "Providing descriptive labels",
                      using: [
                        {
                          id: "TECH:ARIA1",
                          title:
                            "Using the aria-describedby property to provide a descriptive label for user interface controls",
                        },
                        {
                          id: "TECH:ARIA9",
                          title:
                            "Using aria-labelledby to concatenate a label from several text nodes",
                        },
                        {
                          id: "TECH:ARIA17",
                          title:
                            "Using grouping roles to identify related form controls",
                        },
                        {
                          id: "TECH:G89",
                          title: "Providing expected data format and example",
                        },
                        {
                          id: "TECH:G184",
                          title:
                            "Providing text instructions at the beginning of a form or set of fields that describes the necessary input",
                        },
                        {
                          id: "TECH:G162",
                          title:
                            "Positioning labels to maximize predictability of relationships",
                        },
                        {
                          id: "TECH:G83",
                          title:
                            "Providing text descriptions to identify required fields that were not completed",
                        },
                        {
                          id: "TECH:H90",
                          title:
                            "Indicating required form controls using label or legend",
                        },
                        {
                          id: "TECH:FLASH10",
                          title: "Indicating required form controls in Flash",
                        },
                        {
                          id: "TECH:PDF5",
                          title:
                            "Indicating required form controls in PDF forms",
                        },
                      ],
                    },
                    {
                      id: "TECH:H44",
                      title:
                        "Using label elements to associate text labels with form controls",
                    },
                    {
                      id: "TECH:FLASH32",
                      title:
                        "Using auto labeling to associate text labels with form controls",
                    },
                    {
                      id: "TECH:FLASH29",
                      title: "Setting the label property for form components",
                    },
                    {
                      id: "TECH:FLASH25",
                      title:
                        "Labeling a form control by setting its accessible name",
                    },
                    {
                      id: "TECH:PDF10",
                      title:
                        "Providing labels for interactive form controls in PDF documents",
                    },
                    {
                      id: "TECH:SL26",
                      title:
                        "Using LabeledBy to Associate Labels and Targets in Silverlight",
                    },
                    {
                      id: "TECH:H71",
                      title:
                        "Providing a description for groups of form controls using fieldset and legend elements",
                    },
                    {
                      id: "TECH:FLASH8",
                      title:
                        "Adding a group name to the accessible name of a form control",
                    },
                    {
                      id: "TECH:H65",
                      title:
                        "Using the title attribute to identify form controls when the label element cannot be used",
                    },
                    {
                      id: "TECH:SL8",
                      title:
                        "Displaying HelpText in Silverlight User Interfaces",
                    },
                    {
                      id: "TECH:G167",
                      title:
                        "Using an adjacent button to label the purpose of a field",
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:G13",
                      title:
                        "Describing what will happen before a change to a form control that causes a change of context to occur is made",
                    },
                    {
                      id: "TECH:SL19",
                      title:
                        "Providing User Instructions With AutomationProperties.HelpText in Silverlight",
                    },
                    {
                      id: "TECH:future3",
                      title:
                        "Providing linear form design and grouping similar items",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F82",
                      title:
                        "Failure of Success Criterion 3.3.2 by visually formatting a set of phone number fields but not including a text label",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:error-suggestion",
              alt_id: ["minimize-error-suggestions"],
              num: "3.3.3",
              versions: ["2.0", "2.1"],
              level: "AA",
              handle: "Error Suggestion",
              title:
                "If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.",
              techniques: [
                {
                  sufficient: [
                    {
                      situations: [
                        {
                          title:
                            "Situation A: If a mandatory field contains no information:",
                          techniques: [
                            {
                              id: "TECH:G83",
                              title:
                                "Providing text descriptions to identify required fields that were not completed",
                            },
                            {
                              id: "TECH:ARIA2",
                              title:
                                "Identifying a required field with the aria-required property",
                            },
                            {
                              id: "TECH:PDF5",
                              title:
                                "Indicating required form controls in PDF forms",
                            },
                            {
                              id: "TECH:SL35",
                              title:
                                "Using the Validation and ValidationSummary APIs to Implement Client Side Forms Validation in Silverlight",
                            },
                          ],
                        },
                        {
                          title:
                            "Situation B: If information for a field is required to be in a specific data format:",
                          techniques: [
                            {
                              id: "TECH:ARIA18",
                              title:
                                "Using aria-alertdialog to Identify Errors",
                            },
                            {
                              id: "TECH:G85",
                              title:
                                "Providing a text description when user input falls outside the required format or values",
                            },
                            {
                              id: "TECH:G177",
                              title: "Providing suggested correction text",
                            },
                            {
                              id: "TECH:SCR18",
                              title:
                                "Providing client-side validation and alert",
                            },
                            {
                              id: "TECH:SCR32",
                              title:
                                "Providing client-side validation and adding error text via the DOM",
                            },
                            {
                              id: "TECH:FLASH12",
                              title:
                                "Providing client-side validation and adding error text via the accessible description",
                            },
                            {
                              id: "TECH:PDF22",
                              title:
                                "Indicating when user input falls outside the required format or values in PDF forms",
                            },
                          ],
                        },
                        {
                          title:
                            "Situation C: Information provided by the user is required to be one of a limited set of values:",
                          techniques: [
                            {
                              id: "TECH:ARIA18",
                              title:
                                "Using aria-alertdialog to Identify Errors",
                            },
                            {
                              id: "TECH:G84",
                              title:
                                "Providing a text description when the user provides information that is not in the list of allowed values",
                            },
                            {
                              id: "TECH:G177",
                              title: "Providing suggested correction text",
                            },
                            {
                              id: "TECH:SCR18",
                              title:
                                "Providing client-side validation and alert",
                            },
                            {
                              id: "TECH:SCR32",
                              title:
                                "Providing client-side validation and adding error text via the DOM",
                            },
                            {
                              id: "TECH:FLASH12",
                              title:
                                "Providing client-side validation and adding error text via the accessible description",
                            },
                            {
                              id: "TECH:PDF22",
                              title:
                                "Indicating when user input falls outside the required format or values in PDF forms",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:G139",
                      title:
                        "Creating a mechanism that allows users to jump to errors",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Making error messages easy to understand and distinguishable from other text in the Web page",
                    },
                    {
                      id: "TECH:future3",
                      title: "Validating form submissions on the server",
                    },
                    {
                      id: "TECH:future4",
                      title:
                        "When mandatory information has not been provided, including descriptions or examples of correct information in addition to identifying the field as mandatory",
                    },
                    {
                      id: "TECH:future5",
                      title:
                        "Repeating and emphasizing suggestions for correcting each input error in the context of its form field",
                    },
                    {
                      id: "TECH:future6",
                      title:
                        "Providing a way for the user to skip from each item in a list of suggestions to its corresponding form field",
                    },
                    {
                      id: "TECH:future7",
                      title:
                        "Providing additional contextual help for the form field requiring change",
                    },
                    {
                      id: "TECH:future8",
                      title: "Accepting input data in a variety of formats",
                    },
                    {
                      id: "TECH:G199",
                      title:
                        "Providing success feedback when data is submitted successfully",
                    },
                    {
                      situations: [
                        {
                          title:
                            "Techniques for providing suggestions to the user (Advisory)",
                          techniques: [
                            {
                              id: "TECH:future1",
                              title:
                                "Providing a text description that contains information about the number of input errors, suggestions for corrections to each item, and instructions on how to proceed",
                            },
                            {
                              id: "TECH:future2",
                              title:
                                "Providing a text description that contains suggestions for correction as the first item (or one of the first items) of content, or emphasizing this information in the content",
                            },
                            {
                              id: "TECH:future3",
                              title:
                                "Displaying errors and suggestions in the context of the original form (for example, re-displaying a form where input errors and suggestions for correction are highlighted and displayed in the context of the original form)",
                            },
                          ],
                        },
                        {
                          title: "HTML Techniques (Advisory)",
                          techniques: [
                            {
                              id: "TECH:future1",
                              title:
                                'Providing "correct examples" for data and data formats as initial text in mandatory form fields',
                            },
                            {
                              id: "TECH:future2",
                              title:
                                'Providing links to suggested correction text "close to" form fields, or providing the suggested correction text itself directly on the Web page "next to" form fields',
                            },
                          ],
                        },
                        {
                          title: "Client-Side Scripting Techniques (Advisory)",
                          techniques: [
                            {
                              id: "TECH:SCR18",
                              title:
                                "Providing client-side validation and alert",
                            },
                            {
                              id: "TECH:future2",
                              title:
                                "Providing client-side validation and adding error text via the DOM",
                            },
                            {
                              id: "TECH:future3",
                              title:
                                "Calling a function from the submit action of a form to perform client side validation",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:error-prevention-legal-financial-data",
              alt_id: ["minimize-error-reversible"],
              num: "3.3.4",
              versions: ["2.0", "2.1"],
              level: "AA",
              handle: "Error Prevention (Legal, Financial, Data)",
              title:
                "For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true:",
              details: [
                {
                  type: "olist",
                  items: [
                    {
                      handle: "Reversible",
                      text: "Submissions are reversible.",
                    },
                    {
                      handle: "Checked",
                      text: "Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.",
                    },
                    {
                      handle: "Confirmed",
                      text: "A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.",
                    },
                  ],
                },
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      situations: [
                        {
                          title:
                            "Situation A: If an application causes a legal transaction to occur, such as making a purchase or submitting an income tax return:",
                          techniques: [
                            {
                              id: "TECH:G164",
                              title:
                                "Providing a stated time within which an online request (or transaction) may be amended or canceled by the user after making the request",
                            },
                            {
                              id: "TECH:G98",
                              title:
                                "Providing the ability for the user to review and correct answers before submitting",
                            },
                            {
                              id: "TECH:G155",
                              title:
                                "Providing a checkbox in addition to a submit button",
                            },
                          ],
                        },
                        {
                          title:
                            "Situation B: If an action causes information to be deleted:",
                          techniques: [
                            {
                              id: "TECH:G99",
                              title:
                                "Providing the ability to recover deleted information",
                            },
                            {
                              id: "TECH:G168",
                              title:
                                "Requesting confirmation to continue with selected action",
                            },
                            {
                              id: "TECH:G155",
                              title:
                                "Providing a checkbox in addition to a submit button",
                            },
                          ],
                        },
                        {
                          title:
                            "Situation C: If the Web page includes a testing application:",
                          techniques: [
                            {
                              id: "TECH:G98",
                              title:
                                "Providing the ability for the user to review and correct answers before submitting",
                            },
                            {
                              id: "TECH:G168",
                              title:
                                "Requesting confirmation to continue with selected action",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title:
                        "Informing the user what irreversible action is about to happen",
                    },
                    {
                      id: "TECH:SCR18",
                      title: "Providing client-side validation and alert",
                    },
                    {
                      id: "TECH:SL35",
                      title:
                        "Using the Validation and ValidationSummary APIs to Implement Client Side Forms Validation in Silverlight",
                    },
                    {
                      id: "TECH:future4",
                      title: "Placing focus in the field containing the error",
                    },
                    {
                      id: "TECH:future5",
                      title:
                        "Avoiding use of the same words or letter combinations to begin each item of a drop-down list",
                    },
                    {
                      id: "TECH:G199",
                      title:
                        "Providing success feedback when data is submitted successfully",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:help",
              alt_id: ["minimize-error-context-help"],
              num: "3.3.5",
              versions: ["2.0", "2.1"],
              level: "AAA",
              handle: "Help",
              title: "Context-sensitive help is available.",
              techniques: [
                {
                  sufficient: [
                    {
                      situations: [
                        {
                          title: "Situation A: If a form requires text input:",
                          techniques: [
                            {
                              id: "TECH:G71",
                              title: "Providing a help link on every Web page",
                            },
                            {
                              id: "TECH:G193",
                              title:
                                "Providing help by an assistant in the Web page",
                            },
                            {
                              id: "TECH:G194",
                              title:
                                "Providing spell checking and suggestions for text input",
                            },
                            {
                              id: "TECH:G184",
                              title:
                                "Providing text instructions at the beginning of a form or set of fields that describes the necessary input",
                            },
                          ],
                        },
                        {
                          title:
                            "Situation B: If a form requires text input in an expected data format:",
                          techniques: [
                            {
                              id: "TECH:G89",
                              title:
                                "Providing expected data format and example",
                            },
                            {
                              id: "TECH:G184",
                              title:
                                "Providing text instructions at the beginning of a form or set of fields that describes the necessary input",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:H89",
                      title:
                        "Using the title attribute to provide context-sensitive help",
                    },
                    {
                      id: "TECH:future2",
                      title:
                        "Checking byte of character and auto-converting to expected byte for text input if applicable",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:error-prevention-all",
              alt_id: ["minimize-error-reversible-all"],
              num: "3.3.6",
              versions: ["2.0", "2.1"],
              level: "AAA",
              handle: "Error Prevention (All)",
              title:
                "For Web pages that require the user to submit information, at least one of the following is true:",
              details: [
                {
                  type: "olist",
                  items: [
                    {
                      handle: "Reversible",
                      text: "Submissions are reversible.",
                    },
                    {
                      handle: "Checked",
                      text: "Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.",
                    },
                    {
                      handle: "Confirmed",
                      text: "A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.",
                    },
                  ],
                },
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:text1",
                      title:
                        "Following the <a href='http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible.html#minimize-error-reversible-techniques-head'>sufficient techniques for Success Criterion 3.3.4</a> for all forms that require the user to submit information.",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "WCAG2:robust",
      num: "4",
      versions: ["2.0", "2.1"],
      handle: "Robust",
      title:
        "Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.",
      guidelines: [
        {
          id: "WCAG2:compatible",
          alt_id: ["ensure-compat"],
          num: "4.1",
          versions: ["2.0", "2.1"],
          handle: "Compatible",
          title:
            "Maximize compatibility with current and future user agents, including assistive technologies.",
          techniques: [
            {
              advisory: [
                {
                  id: "TECH:future1",
                  title: "Avoiding deprecated features of W3C technologies",
                },
                {
                  id: "TECH:future2",
                  title:
                    "Not displaying content that relies on technologies that are not accessibility-supported when the technology is turned off or not supported.",
                },
              ],
            },
          ],
          successcriteria: [
            {
              id: "WCAG2:parsing",
              alt_id: ["ensure-compat-parses"],
              num: "4.1.1",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "Parsing",
              title:
                "In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.",
              details: [
                {
                  type: "note",
                  handle: "Note 1",
                  text: "Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete.",
                },
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      id: "TECH:G134",
                      title: "Validating Web pages",
                    },
                    {
                      id: "TECH:G192",
                      title: "Fully conforming to specifications",
                    },
                    {
                      id: "TECH:H88",
                      title: "Using HTML according to spec",
                    },
                    {
                      id: "TECH:future4",
                      title: "Ensuring that Web pages can be parsed",
                      using: [
                        {
                          and: [
                            {
                              id: "TECH:H74",
                              title:
                                "Ensuring that opening and closing tags are used according to specification",
                            },
                            {
                              id: "TECH:H93",
                              title:
                                "Ensuring that id attributes are unique on a Web page",
                            },
                            {
                              id: "TECH:H94",
                              title:
                                "Ensuring that elements do not contain duplicate attributes",
                            },
                          ],
                        },
                        {
                          id: "TECH:H75",
                          title: "Ensuring that Web pages are well-formed",
                        },
                      ],
                    },
                    {
                      id: "TECH:SL33",
                      title:
                        "Using Well-Formed XAML to Define a Silverlight User Interface",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F70",
                      title:
                        "Failure of Success Criterion 4.1.1 due to incorrect use of start and end tags or attribute markup",
                    },
                    {
                      id: "TECH:F77",
                      title:
                        "Failure of Success Criterion 4.1.1 due to duplicate values of type ID",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:name-role-value",
              alt_id: ["ensure-compat-rsv"],
              num: "4.1.2",
              versions: ["2.0", "2.1"],
              level: "A",
              handle: "Name, Role, Value",
              title:
                "For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.",
              details: [
                {
                  type: "note",
                  handle: "Note 1",
                  text: "This success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification.",
                },
              ],
              techniques: [
                {
                  sufficient: [
                    {
                      situations: [
                        {
                          title:
                            "Situation A: If using a standard user interface component in a markup language (e.g., HTML):",
                          techniques: [
                            {
                              id: "TECH:ARIA14",
                              title:
                                "Using aria-label to provide an invisible label where a visible label cannot be used",
                            },
                            {
                              id: "TECH:ARIA16",
                              title:
                                "Using aria-labelledby to provide a name for user interface controls",
                            },
                            {
                              id: "TECH:G108",
                              title:
                                "Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes",
                              using: [
                                {
                                  id: "TECH:H91",
                                  title: "Using HTML form controls and links",
                                },
                                {
                                  id: "TECH:H44",
                                  title:
                                    "Using label elements to associate text labels with form controls",
                                },
                                {
                                  id: "TECH:H64",
                                  title:
                                    "Using the title attribute of the frame and iframe elements",
                                },
                                {
                                  id: "TECH:H65",
                                  title:
                                    "Using the title attribute to identify form controls when the label element cannot be used",
                                },
                                {
                                  id: "TECH:H88",
                                  title: "Using HTML according to spec",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title:
                            "Situation B: If using script or code to re-purpose a standard user interface component in a markup language:",
                          techniques: [
                            {
                              id: "TECH:future1",
                              title:
                                "Exposing the names and roles, allowing user-settable properties to be directly set, and providing notification of changes",
                              using: [
                                {
                                  id: "TECH:ARIA16",
                                  title:
                                    "Using aria-labelledby to provide a name for user interface controls",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title:
                            "Situation C: If using a standard user interface component in a programming technology:",
                          techniques: [
                            {
                              id: "TECH:G135",
                              title:
                                "Using the accessibility API features of a technology to expose names and roles, to allow user-settable properties to be directly set, and to provide notification of changes",
                              using: [
                                {
                                  id: "TECH:FLASH32",
                                  title:
                                    "Using auto labeling to associate text labels with form controls",
                                },
                                {
                                  id: "TECH:FLASH29",
                                  title:
                                    "Setting the label property for form components",
                                },
                                {
                                  id: "TECH:FLASH30",
                                  title:
                                    "Specifying accessible names for image buttons",
                                },
                                {
                                  id: "TECH:PDF10",
                                  title:
                                    "Providing labels for interactive form controls in PDF documents",
                                },
                                {
                                  id: "TECH:PDF12",
                                  title:
                                    "Providing name, role, value information for form fields in PDF documents",
                                },
                                {
                                  id: "TECH:SL26",
                                  title:
                                    "Using LabeledBy to Associate Labels and Targets in Silverlight",
                                },
                                {
                                  id: "TECH:SL32",
                                  title:
                                    "Using Silverlight Text Elements for Appropriate Accessibility Role",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title:
                            "Situation D: If creating your own user interface component in a programming language:",
                          techniques: [
                            {
                              id: "TECH:G10",
                              title:
                                "Creating components using a technology that supports the accessibility API features of the platforms on which the user agents will be run to expose the names and roles, allow user-settable properties to be directly set, and provide notification of changes",
                              using: [
                                {
                                  id: "TECH:ARIA4",
                                  title:
                                    "Using a WAI-ARIA role to expose the role of a user interface component",
                                },
                                {
                                  id: "TECH:ARIA5",
                                  title:
                                    "Using WAI-ARIA state and property attributes to expose the state of a user interface component",
                                },
                                {
                                  id: "TECH:ARIA16",
                                  title:
                                    "Using aria-labelledby to provide a name for user interface controls",
                                },
                                {
                                  id: "TECH:SL6",
                                  title:
                                    "Defining a UI Automation Peer for a Custom Silverlight Control",
                                },
                                {
                                  id: "TECH:SL18",
                                  title:
                                    "Providing Text Equivalent for Nontext Silverlight Controls With AutomationProperties.Name",
                                },
                                {
                                  id: "TECH:SL20",
                                  title:
                                    "Relying on Silverlight AutomationPeer Behavior to Set AutomationProperties.Name",
                                },
                                {
                                  id: "TECH:SL30",
                                  title:
                                    "Using Silverlight Control Compositing and AutomationProperties.Name",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  advisory: [
                    {
                      id: "TECH:future1",
                      title:
                        "Providing labels for all form controls that do not have implicit labels",
                    },
                  ],
                },
                {
                  failure: [
                    {
                      id: "TECH:F15",
                      title:
                        "Failure of Success Criterion 4.1.2 due to implementing custom controls that do not use an accessibility API for the technology, or do so incompletely",
                    },
                    {
                      id: "TECH:F20",
                      title:
                        "Failure of Success Criterion 1.1.1 and 4.1.2 due to not updating text alternatives when changes to non-text content occur",
                    },
                    {
                      id: "TECH:F42",
                      title:
                        "Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links",
                    },
                    {
                      id: "TECH:F59",
                      title:
                        "Failure of Success Criterion 4.1.2 due to using script to make div or span a user interface control in HTML without providing a role for the control",
                      notes: [
                        "This failure may be solved in the future using DHTML roadmap techniques.",
                      ],
                    },
                    {
                      id: "TECH:F68",
                      title:
                        "Failure of Success Criterion 4.1.2 due to a user interface control not having a programmatically determined name",
                    },
                    {
                      id: "TECH:F79",
                      title:
                        "Failure of Success Criterion 4.1.2 due to the focus state of a user interface component not being programmatically determinable or no notification of change of focus state available",
                    },
                    {
                      id: "TECH:F86",
                      title:
                        "Failure of Success Criterion 4.1.2 due to not providing names for each part of a multi-part form field, such as a US telephone number",
                    },
                    {
                      id: "TECH:F89",
                      title:
                        "Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link",
                    },
                  ],
                },
              ],
            },
            {
              id: "WCAG2:status-messages",
              alt_id: [],
              num: "4.1.3",
              versions: ["2.1"],
              level: "AA",
              handle: "Status Messages",
              title:
                "In content implemented using markup languages, status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.",
            },
          ],
        },
      ],
    },
  ],
};
