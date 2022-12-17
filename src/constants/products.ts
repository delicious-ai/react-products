export type Category = typeof CATEGORIES[number]

export type Product = {
  name: string
  packaging: string
  upc: string
  category: Category
  imageUrl: string
}

export const CATEGORIES = [
  'SPARKLING',
  'WATER',
  'ISOTONIC',
  'REJUVENATE',
  'ENERGY',
] as const

export const PRODUCTS: Product[] = [
  {
    upc: '021136010374',
    imageUrl:
      'https://lh3.googleusercontent.com/z4_CZAFwLRZUkXS74IZiC06jc4Gh5WRWyNRmn4vN1z3vM3HZadvRLF5kk7Xde5QnSFPZAVTu_2FdJPL8Zj5mmU-9weS1SL5RYE-B6F3P',
    name: 'Topo Chico Mineral Water Glass Bottle, 12 fl oz',
    packaging: '1 Bottle of 12.0OZ',
    category: 'WATER',
  },
  {
    upc: '021136010435',
    imageUrl:
      'https://lh3.googleusercontent.com/6gCjoyeS4hKlW4ubNgrjOUG-31fWivTLtcX3sFfZTZRXH3swEIdmWMZZ9rdS8ulXSFnOJEQAzVbzcjToRrdiwM_RDvobG09nPOlxG-0',
    name: 'Topo Chico 9-12oz Bottles',
    packaging: '9 Bottles of 12.0OZ',
    category: 'WATER',
  },
  {
    upc: '021136010626',
    imageUrl:
      'https://lh3.googleusercontent.com/h2D50xulQl1vnTrrQzPFY36l9uGfGpI9tmqehOTIzPK6cLatchqHYV8y8OvrIYSkHhjrTmAfpffqBFmPaSXKZzCxxs-c-MAygWMT8EqQ',
    name: 'Topo Chico Mineral Water Glass Bottle, 25.4 fl oz',
    packaging: '1 Bottle of 25.4OZ',
    category: 'WATER',
  },
  {
    upc: '021136010985',
    imageUrl:
      'https://lh3.googleusercontent.com/0TVUne-BQ8s88ABCGX0elpmR5i2-G386en7tK6n3KQOZwwlX2a4eoX64_F1b5z2VF67Cpjn8tYebX9XYZljj40gWEdMOeXDKKjV1bsPq',
    name: 'Topo Chico Mineral Water Bottle, 1 Liter',
    packaging: '1 Bottle of 1.0L',
    category: 'WATER',
  },
  {
    upc: '021136016444',
    imageUrl:
      'https://lh3.googleusercontent.com/QNHxgGgPOGbm86j0yreXPkx2b6QQR6Qjxd98S9P-NIirTj1szedRrb72Ioq0qZTcj0c8uyvbAmvaXwJ9FsI5oclUySNnS9LpoHP8f5c',
    name: 'Topo Chico Twist Of Grapefruit 12oz Bottle',
    packaging: '1 Bottle of 12.0OZ',
    category: 'WATER',
  },
  {
    upc: '021136020373',
    imageUrl:
      'https://lh3.googleusercontent.com/_eDvIyh88kv9By5sbpbytGe2E2n-vnwHUu3svhPhE3xJpsUaOmrSohtQqwDh_E-pmj2O4gIlRwACFodf7qS4LxaRvpMhaM6gxF7ofSqhlg',
    name: 'Topo Chico Mineral Water Glass Bottles, 12 fl oz, 4 Pack',
    packaging: '4 Bottles of 12.0OZ',
    category: 'WATER',
  },
  {
    upc: '021136110449',
    imageUrl:
      'https://lh3.googleusercontent.com/DGZd_N4JvlpYzSriWZ-ZoQfONZ0ERGXPfSH_LBXmW01y7u7LCXcFp7pM9rZJMJYLOCoxBUESyukV6cV-m7oetE9CZxuOpQ6FvYCG0FnCww',
    name: 'Topo Chico Mineral Water Twist of Lime Glass Bottle, 12 fl oz',
    packaging: '1 Bottle of 12.0OZ',
    category: 'WATER',
  },
  {
    upc: '025000032233',
    imageUrl:
      'https://lh3.googleusercontent.com/sjDLuGSWqtNGeAl8dZQivzQdqKjvTqHVaVDqrm7ATTfhlQ9a4UZbnIz3tcDUZRPisohscxTeXv-hsGIy5Fy_YPbsA1LMjug0_huRPwpg',
    name: 'Minute Maid Fruit Punch Bottles, 16.9 fl oz, 6 Pack',
    packaging: '6 Bottles of 16.9OZ',
    category: 'SPARKLING',
  },
  {
    upc: '025000051548',
    imageUrl:
      'https://lh3.googleusercontent.com/0ApoR9RI-dVkRt36vtGlg49zj-3bHGVa9TO0h7ViRaam1mSSdr0jwIkkVV7HEsV3SdGSTNSLulM0zdF7OQl6B5Cty-dc2b0ebxnlmvA',
    name: 'Minute Maid Pineapple Orange Juice Bottle, 12 fl oz',
    packaging: '1 Bottle of 12.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '025000052002',
    imageUrl:
      'https://lh3.googleusercontent.com/Cj6r7cAiHhGcTHYYC4VScIF3D6DBsqXn48GtAubeliSreDNWt_3VZUxgJ8yiQpp_ToZxq26cR0YPBly3W1vcIDjslPwZnhHTlyB7mldc',
    name: 'Minute Maid Cranberry Grape Bottle, 12 fl oz',
    packaging: '1 Bottle of 12.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '025000052224',
    imageUrl:
      'https://lh3.googleusercontent.com/Yu2tLROBOkeYsy8YG8rs8kubsgw6G5r5fSiIy40VxQWbHgvlHZn_7wLVlhkGlwIo-I4QcNZAFCuyPMI1Vhekzh-K-JkSHFo41avo7zQ',
    name: 'Minute Maid JTG Cranberry Apple Raspberry Bottle, 12 fl oz',
    packaging: '1 Bottle of 12.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '025000053498',
    imageUrl:
      'https://lh3.googleusercontent.com/dWqMOchLNS47KogmqgfOudwtdPoEtAf0xokALlSXFYd2Uq--QDlACEPAmfRrfUwPDQzMZhdQs57d6UeA2T-RMNxM-9axPivIO4YkwvEf',
    name: 'Minute Maid Pink Lemonade Bottle, 2 Liters',
    packaging: '1 Bottle of 2.0L',
    category: 'SPARKLING',
  },
  {
    upc: '025000053818',
    imageUrl:
      'https://lh3.googleusercontent.com/VlBS2zSfSCzeVR1Ak9WqfPEJ-kqE8C0ru8Ah5QOpLvevdDUn9iVhRAY2ncq9D4wpcQKdCY4Pg3ERNmSmzj9_s4SySSceAIe-FKmjYiPs',
    name: 'Minute Maid Lemonade Bottle, 2 Liters',
    packaging: '1 Bottle of 2.0L',
    category: 'SPARKLING',
  },
  {
    upc: '025000056840',
    imageUrl:
      'https://lh3.googleusercontent.com/OzYIIK8hsD8lzAvW-ZZf4QncdZzROTghdjqLvHGqLxrHBktGLXRItTgMErWs89Z4hicUzGrqc2VylQHV2754Yojvv0WSazwnaOr-eKgdqA',
    name: 'Minute Maid Apple Juice Bottle, 10 fl oz',
    packaging: '24 Bottles of 10.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '025000056857',
    imageUrl:
      'https://lh3.googleusercontent.com/hcarBHEzbUmAsqyTIGfvTFDJDRsPQGVWyJfkSldvSSDcblkKHLFJZqQuA8xew593rIYgjBPUtUsQ_IQzYNVWg6uQU0x2JOPLdtBCMuw',
    name: 'Minute Maid Orange Juice Bottle, 10 fl oz',
    packaging: '1 Bottle of 10.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '025000058011',
    imageUrl:
      'https://lh3.googleusercontent.com/vAb_9m-XsoFtOBQVRfpz5McT3ez252yGFVQG3cFK1TFlQwl07EGvqpuxAOOVuC9ogffBTTPeXmQ3q_CmNoK7X3fj3mpURS5SuGoyXMwU',
    name: 'Minute Maid Lemonade Bottles, 20 fl oz, 24 Pack',
    packaging: '1 Bottle of 20.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '025000058240',
    imageUrl:
      'https://lh3.googleusercontent.com/ryJfxXBH6St7vLd712vzaWHnPlAlCTg0IKyEM36IEyL5NawpWC4zOchzI9GF-PT9ujxQc33yWWXV62wTNUWKIOb-7zUJyS70MXSYL1s',
    name: 'Minute Maid Pink Lemonade Fridge Pack Cans, 12 fl oz, 12 Pack',
    packaging: '12 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '025000058288',
    imageUrl:
      'https://lh3.googleusercontent.com/rx_f_bgmU7MH-MNaegEf_v_Yac6xL7heg_05fn2CQoDhAydObdE-YJqZxd1NgbX0T8h5WsRQQZ1z26D5Z_NwGf4TtGRHpdTw4sb4_hyd',
    name: 'Minute Maid Lemonade Bottles, 16.9 fl oz, 6 Pack',
    packaging: '6 Bottles of 16.9OZ',
    category: 'SPARKLING',
  },
  {
    upc: '025000058998',
    imageUrl:
      'https://lh3.googleusercontent.com/wd5gtskbqf4DOVII5Uy9ofE1SynEm-XKXutnkunaQ_1IrRK-TViP13WU_SmkK7m1jpjB379PzSvax5xO7YgUsfriVzCyiSsSH8sNxgE',
    name: 'Minute Maid Light Lemonade Fridge Pack Cans, 12 fl oz, 12 Pack',
    packaging: '12 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '025000061530',
    imageUrl:
      'https://lh3.googleusercontent.com/qX7VzVHXE5pG8nTWDh2eIPe6EDNegYfE3g7hFm32sAnvXPZ30VbEh9pO9UoU6ykWrjFzacA1ueRHQMzgFuyih2lHVi86zpXQOwTVSIg',
    name: 'Minute Maid Orange Juice Bottle, 12 fl oz',
    packaging: '1 Bottle of 12.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '025000062292',
    imageUrl:
      'https://lh3.googleusercontent.com/ahz88kWdPaf7dLs31G0Q4RY2uZQF8w4vMSN44hzR0MafhE8J1XaCnFyaEeFawb_XXP9wAS5Fb-bG3RGS6AUHQ4rGFSX8UBBaWMBYYBQ',
    name: 'Minute Maid JTG Tropical Bottle,  12 fl oz',
    packaging: '1 Bottle of 12.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000001327',
    imageUrl:
      'https://lh3.googleusercontent.com/FaiTn4B91-eQSgHTZDMWkqAHX5Say0tg-YvNlPMoDw5kVuWvjToxfHkOSzlVZWDw5ReJRoSodzAxd9IInljGTZSF4ma5qdsy3VOtpKY',
    name: 'Sprite Cans, 12 fl oz, 6 Pack',
    packaging: '1 Can of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000003147',
    imageUrl:
      'https://lh3.googleusercontent.com/jgWho72tIytq3WdN-7CJVzIrc4Ha1hsn3uFpOWfrAQ-ETIQK1n5050kmPSkvzaAAF_4DWQIdCcBI9sVkNmgdriVnT9QW',
    name: 'POWERADE Fruit Punch Bottles, 12 fl oz, 6 Pack',
    packaging: '6 Bottles of 12.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000003185',
    imageUrl:
      'https://lh3.googleusercontent.com/ES6H2yMNnHrgAMaYl6MudZWI8wN3RkekEugHXEHfap0zUj8KAWf6E5po_Z4QilS3RTsv9CFDNv34wtpqNF5Up_KLfQ',
    name: 'POWERADE Mountain Berry Blast Bottles, 12 fl oz, 6 Pack',
    packaging: '6 Bottles of 12.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000003659',
    imageUrl:
      'https://lh3.googleusercontent.com/2mtlrrF8lL0RyE_X6UXboHtCc9SmRV2I5eVGjhEoRooYfZZNa8j2owfsU1laR4fYx9JRAZ4FOLbR8t5-IBUhd9ULuEO90IoigAdSUKI',
    name: 'Coca-Cola Vanilla Can, 12 fl oz',
    packaging: '1 Can of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000003710',
    imageUrl:
      'https://lh3.googleusercontent.com/sXPirOIq1dh9XPclb-FGfsVjt97OHosDXn9SEmufEJOZ3-4tppbktNpLyqP5PvNMckMCP4KpClO1hLe1wEmS9-Ur1wsg-P7gqvkcjKtPmw',
    name: 'POWERADE Fruit Punch Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000005240',
    imageUrl:
      'https://lh3.googleusercontent.com/XqsE4tO8X1TMGMbTKUaZQRnTqbkIXQR27Bb_P9IzOMYZTwqyN6dOMKD1EYGnZwy-0sYb5DM_9zjRxd12RGZOTKjghVPHl_6hYQTHfKbo',
    name: 'Diet Coke Bottle, 1 Liter',
    packaging: '1 Bottle of 1.0L',
    category: 'SPARKLING',
  },
  {
    upc: '049000005486',
    imageUrl:
      'https://lh3.googleusercontent.com/XRuWVqGklN4nPEBCMs2gaTd58ONpvgYjO6l6PdgCTXcEDJHqX6MCYAcTf8BtbAfer31N4Rp6SGslI58I8EnT9lqC73sMeJjYcnvWCVRq',
    name: 'Coca-Cola Bottles, 12 fl oz, 8 Pack',
    packaging: '8 Bottles of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000006124',
    imageUrl:
      'https://lh3.googleusercontent.com/s6ruBpH3pgir1GF-t7KeRXsLIVeV-jlyJYMp4BEN34JFql5rF0nrwH9LSbM9H4CtWZU0ufVWOvAM4ILV_cygO-m4luSvT0rR9inWV0exug',
    name: 'Sprite Bottles, 12 fl oz, 8 Pack',
    packaging: '8 Bottles of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000006131',
    imageUrl:
      'https://lh3.googleusercontent.com/PYUzM7-F8Tge5VS3-BrLPufhgDD8vMMq1zN93mF9KocIroPxlOFCCeGLIgnntd6Ycw5trFpIwqDCuPZ_m5UdnEd4gHY',
    name: 'Diet Coke Caffeine-Free Bottles, 12 fl oz, 8 Pack',
    packaging: '8 Bottles of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000006346',
    imageUrl:
      'https://lh3.googleusercontent.com/8aJ7feqzr8oABZir9k-JeerJknNcOsFEst9mfqMPnR90B3rkuRzr4GmqCMaZB8azgd559KRgV1OF_o7XrQUQmihCEhbyOtXuWshD4Qs',
    name: 'Coca-Cola Can, 12 fl oz',
    packaging: '6 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000006582',
    imageUrl:
      'https://lh3.googleusercontent.com/ejC64V9mWvJZ4v3d-GAn1WLMNf95Klx-VHxWpXaXbqK0MnRKUykF-TbBc35w7V2-r05_1Y4vKH3SKlcxjpe8tXojW2H1utoheo6yCrjyVw',
    name: 'Diet Coke Can, 12 fl oz',
    packaging: '6 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000006841',
    imageUrl:
      'https://lh3.googleusercontent.com/VdaQfdMza9udM8JfA0jZasNQO0UuPfILMADmy9qqV6dUnlkizhip5dQon4RX0opAmLTGr8KHdNc5hLOY7bOzegO1zft_Hh5tkwQb1wP9',
    name: 'Coca-Cola Zero Sugar Bottles, 12 fl oz, 8 Pack',
    packaging: '8 Bottles of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000007428',
    imageUrl:
      'https://lh3.googleusercontent.com/kP-muGJqStfFSN1l_EhbxyNCiLku4UL6usiS3tK_-97q-I9qyWjwlLXzbRCQqGBCA5syPhky76AOQxctJTvCtnLzuP5EYfRquOi9pw',
    name: 'DASANI Purified Water Bottle, 10.1 fl oz',
    packaging: '1 Bottle of 10.1OZ',
    category: 'WATER',
  },
  {
    upc: '049000007640',
    imageUrl:
      'https://lh3.googleusercontent.com/MO41e7_C2awb8WLqTmlugVY5CvIYw8qg8nIZ7xXqZ81sH5c3patSO93prpJ4YhlVFspvoacS2QT58JeBGAB9Qc839K9Pa_kJi2oBPa1v',
    name: 'Sprite Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000009774',
    imageUrl:
      'https://lh3.googleusercontent.com/PDIrnCxWEp65Ae01cAIlxLqsYWMVz2fpW13W4PsAcXVsAT0iYr_avNLl0Z6ErLyXUF6pEly32bV8b-5IT__fCOTSs22ITH-OqoSQi5t5',
    name: 'DASANI Purified Water Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'WATER',
  },
  {
    upc: '049000009781',
    imageUrl:
      'https://lh3.googleusercontent.com/cs2TbP9sJX2BV0qyY688YMVqcpXu7TWs0ZYsbBR_JoZW6F44KFELIZcqe5x1DoVQMFGnz0Z5xnM4ANMDRQcaddvTEUmevpX2SmsYtgas',
    name: 'DASANI Purified Water Bottles, 16.9 fl oz, 6 Pack',
    packaging: '6 Bottles of 16.9OZ',
    category: 'WATER',
  },
  {
    upc: '049000014235',
    imageUrl:
      'https://lh3.googleusercontent.com/QxK2WgBg5li2aAp20VLqIup6rl9I-JIvdu1DJ56CYDfDJSJt2_5hAYnUktz6lZYvTQkSSgkYStuqpJ8t2hh5cIuyHiFm1RbUnNRGeoIxVA',
    name: 'Fanta Orange Soda Can, 12 fl oz',
    packaging: '6 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000014631',
    imageUrl:
      'https://lh3.googleusercontent.com/0xwRHJLAMPP34mRfAtHnwDWmOA4hVMav3m__dSwzqdNfoU9z3sB09rP35Jr65psIZiMR4W9Putr2qa4ZyhDwJ8Wh5RYN03vcb3iOwlQ',
    name: 'Coca-Cola Cans, 12 fl oz, 20 Pack',
    packaging: '20 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000014648',
    imageUrl:
      'https://lh3.googleusercontent.com/N-y4Y_jJULf-fIkmLcULJMpXtWgjuTCoW0AorLRBNXd02z6890dvmo8SURP84UKFmCOoF_LbYIHhgdmyg80ti0EIzI20wcJ-8dWxrS8',
    name: 'Diet Coke Cans, 12 fl oz, 20 Pack',
    packaging: '20 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000014655',
    imageUrl:
      'https://lh3.googleusercontent.com/cb0VqqDSlhNq6bUHhNY9BCV3aWid84oJa1OqWd23tz4LC6Rbkd4zTBp402F-U0D7vfaMfbZid00Glsj47EvqUh1NLwTmdWtLekodLGg',
    name: 'Sprite Cans, 12 fl oz, 20 Pack',
    packaging: '1 Can of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000018011',
    imageUrl:
      'https://lh3.googleusercontent.com/ChkycKVH84Rg-HQ2KY4APFvTNo4FWg_kd-QB2WOJIz4xJE8WNiUQLLGBM16Qb4ikgLk3Ft1MkCa0NT6p5rPtSgfIhXpceh1QvkO8VO4eQg',
    name: 'Coca-Cola Cherry Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000018349',
    imageUrl:
      'https://lh3.googleusercontent.com/z1FnXo-U6-6ziWQMk3DSN9n1SwzElbOS_msOvl7jEcEJ3P2RalxccTRKqkmoNFVqovnEntFfRd-DmgGJu5nRmRBDUEPT_CzXbwWQ36qH',
    name: 'Coca-Cola Glass Bottles, 8 fl oz, 6 Pack',
    packaging: '6 Bottles of 8.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000019384',
    imageUrl:
      'https://lh3.googleusercontent.com/BABeGnYUb4ZlbfgFHO_nmHoSwaDwam0iYqLNIHYAacEej0CbyDI7rDsAX33kPm7EaEzoG8dlpzaq7X1zRmQxWhGmkUCwhrcLjw1T9s0KdA',
    name: 'Sprite Cans, 12 fl oz, 24 Pack',
    packaging: '24 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000019803',
    imageUrl:
      'https://lh3.googleusercontent.com/uSclWVg1Po6UlpjDoHJVtixjk6pbxgbmUm0Ctlpal2C72ehQAQKRP7tkI4K2GaLwKoTMloS3ICdDuxO3Sz4EjzdWLi8IlPDJhvNNI8EG',
    name: 'Sprite Glass Bottles, 8 fl oz, 6 Pack',
    packaging: '6 Bottles of 8.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000022537',
    imageUrl:
      'https://lh3.googleusercontent.com/LGzBolp60a_AmNhNMZkzOj5BQJUo3aj2DjGHJB0kTBQVWI8U2Bk3WyVdKOogHTfWcpoPbqjKIc5q7gO28NILOXCL27_ukKf0XPKxo60R',
    name: 'Coca-Cola Cherry Bottle, 1 Liter',
    packaging: '1 Bottle of 1.0L',
    category: 'SPARKLING',
  },
  {
    upc: '049000023190',
    imageUrl:
      'https://lh3.googleusercontent.com/QNPZjKhaG1r3R49IWWTqWwAxHOaTdCr2lWjCgRcyhIOY5O9nqL2qtMDihsLsR9HoQJ8di00XxgyQkew74Dhwi6_SNfBx2g1cxHFCHp8',
    name: 'Sprite Bottle, 1 Liter',
    packaging: '1 Bottle of 1.0L',
    category: 'SPARKLING',
  },
  {
    upc: '049000023923',
    imageUrl:
      'https://lh3.googleusercontent.com/HRPlP5E_BsvrT3Y4dwI4d-i5xqBGBZTVR857xnxP4BvV40AMrcZL6xY05HAjD9BMsWQN3nzgmwHtlioinP4O6brU-9E1f8Mba_psoHXU',
    name: "Barq's Root Beer Bottle, 20 fl oz",
    packaging: '1 Bottle of 20.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000024685',
    imageUrl:
      'https://lh3.googleusercontent.com/5xRBUGSoiMrFkwtz4FNORd_H3eb-HpMLpbrsbdTIKBGCBHGVIQYj0tYoXj3wOhhXXX1XEfO2zrPTc_bfYXakVcIgFg',
    name: 'Coca-Cola Bottles, 16.9 fl oz, 6 Pack',
    packaging: '6 Bottles of 16.9OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000024708',
    imageUrl:
      'https://lh3.googleusercontent.com/NbLQe43Mrav65aiYbfhV7cDmI_Jbujnqqv3HfNH3QEQeKZ7n4j5pYIYHS4ANELUDPrhR0HQ5FS0d94kJT2nVtq8KC9Ni3ncK2Yuh1wA',
    name: 'Sprite Bottles, 16.9 fl oz, 6 Pack',
    packaging: '6 Bottles of 16.9OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000025422',
    imageUrl:
      'https://lh3.googleusercontent.com/KtuKWcaJUZxOcqSg-4sWgdUa6go9mSYBGTC15HDESlfb6Fe0IvcbuDNBGF2yK5NXgjHpZfsk0uZ1a6FEc9lEDxRtuIKR3FQIg6B6YUSu',
    name: 'Diet Coke Caffeine-Free Bottles, 16.9 fl oz, 6 Pack',
    packaging: '6 Bottles of 16.9OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000026207',
    imageUrl:
      'https://lh3.googleusercontent.com/mMKwSUvaaTxWurWwWWZLMXnNf0_8dsKMKrA9Bt8NpFiIVM7Hyp-9vtz7bIcT4lIlNEYryoeQSXncKnQSmbQCmN7vJkkMZC81CNYVBBpe',
    name: 'Fanta Strawberry Soda Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000026573',
    imageUrl:
      'https://lh3.googleusercontent.com/6h6dhXuHSDk-QwpmNPUJGdowTcNmDYoGtyPrN7GaznSD8GfmYB8RzmEHbMTCzQnJOnFYnTfFfNo8s3xpfCk4i_au49M',
    name: 'DASANI Purified Water Bottle, 1.5 Liters',
    packaging: '1 Bottle of 1.5L',
    category: 'WATER',
  },
  {
    upc: '049000028201',
    imageUrl:
      'https://lh3.googleusercontent.com/riE3Sapo4U5mGGxIkXEnUplWQ6DNOsX-e-8jxy6w4LtjoIBsNIxyeVzdNLavdXmDOVyNyFEpBW-Ui39_8wApDF6R-V-jQ5xPX-ETmmU',
    name: 'Fanta Pineapple Soda Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000028706',
    imageUrl:
      'https://lh3.googleusercontent.com/jx8xcHYTkhWy_IbJlXyd1ic0txRii9v-fSXegkSIjGEDguZb7JYJG301dZPmGSB19_2cy0z10atAosQ3zG0ws6VhG-f_yIsjRKUvGOQ',
    name: 'DASANI Purified Water Bottles, 12 fl oz, 8 Pack',
    packaging: '8 Bottles of 12.0OZ',
    category: 'WATER',
  },
  {
    upc: '049000028928',
    imageUrl:
      'https://lh3.googleusercontent.com/psqm2MFARXJSf1tcxEUCLPwCKfoXkxgBd_XTMAW2wdDtDRC2-yGTq65D6q1l6LM1cKK_q_apes4iIEGmnGqQBAh-Ou8krSRL3b5PlcrjbQ',
    name: 'Sprite Fridge Pack Cans, 12 fl oz, 12 Pack',
    packaging: '12 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000029338',
    imageUrl:
      'https://lh3.googleusercontent.com/R7t0I2Omp13hCSCnpA00ldggO7oucpN8vjRU-XuioPd0_Nkwdj_eqdgjFD04F088yhAY0W70CrkJKZlZxX3TbGaG4_KXk_7hHy8pep4K',
    name: 'Coca-Cola Caffeine-Free Fridge Pack Cans, 12 fl oz, 12 Pack',
    packaging: '12 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000029796',
    imageUrl:
      'https://lh3.googleusercontent.com/Ws_mSmW8FdaZ7N1ED4BwbaioWwJqTWL2rUy69UA7ZJQxell5sg3S07lJZoSR5mTXm3H4E1c2fZUtOUvJHms6DzSlP6hiMUEfTwiyXBo',
    name: 'Pibb Xtra Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000030129',
    imageUrl:
      'https://lh3.googleusercontent.com/IEMUrQ9EEculEG4wX8xi79uWv9mV3n-VIUdhhIQInW_5Vo1r7XfjtzDQpExwp4EuCPHgAWMN62MtUVor3yEh9C2grvPVEiiA2gPOBbw',
    name: "Barq's Root Beer Fridge Pack Cans, 12 fl oz, 12 Pack",
    packaging: '12 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000030211',
    imageUrl:
      'https://lh3.googleusercontent.com/2Zt_RNdbveDPDBJHMEu5aKnnFBCbE-QVJdHhexRckt2pwxxIUduUdYNiDzVf1Gs7l9GoWXg23ZTvOXaQ2Hb0Sn61xmmQVVxBBCjdKAw',
    name: 'Fanta Orange Soda Bottle, 1 Liter',
    packaging: '1 Bottle of 1.0L',
    category: 'SPARKLING',
  },
  {
    upc: '049000030747',
    imageUrl:
      'https://lh3.googleusercontent.com/xg31RuRQFvBpH9VZU_AEcR4sfc-UaJYnPX6RZh25MRHCBfYnmYUnjLMNmTfYxFP0DQjem0L63UYjDSWmqU6o8vf_DI2O-4vu74o8uzpb',
    name: 'Fanta Grape Soda Fridge Pack Cans, 12 fl oz, 12 Pack',
    packaging: '12 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000030778',
    imageUrl:
      'https://lh3.googleusercontent.com/ZMz68pZBuMFAfEopdt92tnlvdetakQjDvPVV44p8P_GFT4XyuwY9MlrIw96R4yfIqyz0WHdPwS5LJaEpkapIS3xhaBmiYz3BC1eCMK4S',
    name: 'Pibb Xtra Fridge Pack Cans, 12 fl oz, 12 Pack',
    packaging: '12 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000031034',
    imageUrl:
      'https://lh3.googleusercontent.com/UQdfNudo18bhmU-r1wJ7aCcKgkOp8rxph3Tme6lEGA1tJDiVyFoskSCareLaixDIkT7WSR6yaTpkT8Ea-8VBBYbvVqw-jmUHfKDUVR9F9w',
    name: 'Coca-Cola Cherry Fridge Pack Cans, 12 fl oz, 12 Pack',
    packaging: '12 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000031058',
    imageUrl:
      'https://lh3.googleusercontent.com/mbZigMS0w17oVwWXMmlH5Hl1xyqe2FTDpVZpy88zyzmDwU727RhCuNxlVMXuacQqP4vRhtdhjY3jhJKPqXHVKDLJbfHpWeMJwVNnsTU9QQ',
    name: 'Fresca Fridge Pack Cans, 12 fl oz, 12 Pack',
    packaging: '12 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000031089',
    imageUrl:
      'https://lh3.googleusercontent.com/FR3hNhjvH1wG4n0yNgSY2kBNzGw4YJwWHECAlseTvBh3XqcStzp8dnt1iJ-gq4sR9iLtYGfIp5j3fzHM7viJDxxG1qUoYN6RIvhWc6k3',
    name: "Diet Barq's Root Beer Fridge Pack Cans, 12 fl oz, 12 Pack, 2 Sets",
    packaging: '12 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000031096',
    imageUrl:
      'https://lh3.googleusercontent.com/gC98ESqvACAp32t37B64XfMmpN-LcW4et_tObv_-iEnOe56tHlsePXU24nm8a84eb7fMvhI6rSIu1F3fIgf49OIWYe0',
    name: 'Tab 12oz Can',
    packaging: '1 Can of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000031249',
    imageUrl:
      'https://lh3.googleusercontent.com/xs4Z3MGTSOVQ8uYC77FvrqlGUrv0W0zEX8qgjOAhlySYYBdmm_ti4D2fCjdtwPQhuEapu1m6GfHma1XDwXE1vjsQlllL8iuKsYBwFH0q',
    name: 'Coca-Cola Vanilla Fridge Pack Cans, 12 fl oz, 12 Pack',
    packaging: '12 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000031324',
    imageUrl:
      'https://lh3.googleusercontent.com/oUp7zBrzM8jRJ_96IzRVnuSfomlnlT4Gxaw4DY_EH12tGknIWmtQNvvit5DoPvUx_9bpUhsRFIzIFdyqMJFRT9H3eiw',
    name: 'Coca-Cola Vanilla 1l Bottle',
    packaging: '1 Bottle of 1.0L',
    category: 'SPARKLING',
  },
  {
    upc: '049000031652',
    imageUrl:
      'https://lh3.googleusercontent.com/qoIsXOts_p0burRB3XpwBygJhah59XRk2m9Fw7GwvCpjsh8G0ccVk4XlmdZV3_fdllJzTr2HKajvG3Iqqe4rettpQY2UnBuoTbZ088Vq',
    name: 'DASANI Purified Water Bottles, 16.9 fl oz, 24 Pack',
    packaging: '24 Bottles of 16.9OZ',
    category: 'WATER',
  },
  {
    upc: '049000035551',
    imageUrl:
      'https://lh3.googleusercontent.com/QVfzjTIJLlAmTN23WfL7urnaXiYkSPwc4EdfvxlonbMtrBEXBZCvre4ZS4CIhRq85Lql7SMx52bzmKG7RTnsDHI6tPdWO814r7-zNR7D',
    name: 'Coca-Cola Bottles, 16.9 fl oz, 24 Pack',
    packaging: '24 Bottles of 16.9OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000035575',
    imageUrl:
      'https://lh3.googleusercontent.com/kBmD7Fvh6YOEFq1Gy9f6hBN1KCzTykXBAzcgEE1Xu_CxFBMi_YKnV0FonbhpZYChDMqzgXzgEwF_BqXrV2xQhnzeEF0GokwkbuBZQ-M',
    name: 'Diet Coke Bottles, 16.9 fl oz, 24 Pack',
    packaging: '24 Bottles of 16.9OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000036619',
    imageUrl:
      'https://lh3.googleusercontent.com/psMYnXMADmT0DcD3pUyKK7guydKJ2i8c6QEUL-Tl-ny7QvPtiFExB7JA4Dd_24AXqtWwHE_Re0k0ANO2jUw8KbdW5NlFQH1X793rDGCO',
    name: 'Fanta Orange Soda Cans, 12 fl oz, 20 Pack',
    packaging: '20 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000037111',
    imageUrl:
      'https://lh3.googleusercontent.com/s5rhKqiQ656MJfmRDH4SatfTp4pnmDmL1GwcnL5fW3TrgfA3HOVCQlPkadH5YV8VfTWdKRuj_3DA8GvODUCH21h1tJTcSNw5Z-uq1c94',
    name: 'Sprite Zero Sugar Fridge Pack Cans, 12 fl oz, 12 Pack',
    packaging: '12 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000037197',
    imageUrl:
      'https://lh3.googleusercontent.com/9GgJGakiK6hxkVY6qcecjkVLPkYV3dXtOkt6jItZnpsrRBIjdoRTRxjJBtKxXO-rmbN2j_ujxEhIIrWALtFslFG7d-kMCD8V8AbZdBIg',
    name: 'Sprite Zero Sugar Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000037562',
    imageUrl:
      'https://lh3.googleusercontent.com/_soZ-EFjt34WhOm6xAkmvTkZ1cgsZK0jpWtLgOpJJJTKHBbWVZq07QZqBnWyR3nslhzntW-ZFZzzDkeYOoxFPXwJjYKRjfYLWxM9RX5lEQ',
    name: 'Sprite Bottles, 16.9 fl oz, 24 Pack',
    packaging: '24 Bottles of 16.9OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000038378',
    imageUrl:
      'https://lh3.googleusercontent.com/YtBHBLxpaE-p3nEmM1SP6F7UPxwAk06E1eR8m5RaBS9v89l5SJNVI83BacPCEWQS-NMxx8RYg0TEVcUb5G-p4137ZeKGwhYAzPz1uk8T',
    name: 'DASANI Raspberry Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'WATER',
  },
  {
    upc: '049000038385',
    imageUrl:
      'https://lh3.googleusercontent.com/Z-Ie83zZXUfWQ5nxMlCgmJWbU1oE1CXBdyxYX4jRzs1Z1PUBiezLgwgvoyX10snLIMLVog61X5pxXMYch-AUOuVtfuYrWSQkl0OR5ec',
    name: 'DASANI Lemon Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'WATER',
  },
  {
    upc: '049000040869',
    imageUrl:
      'https://lh3.googleusercontent.com/K4FCTbWHcvbyIdfa-vad_OFjcVLhsC0aIDH-QFJiYKve-eJiNYzD12cvlxOh5MgK9Y4InZDwZhOE4wwQ7ID5k8mmOKNQ8iFs5lEuybbLlA',
    name: 'Coca-Cola Zero Sugar Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000042849',
    imageUrl:
      'https://lh3.googleusercontent.com/74SN5s3I0u8_27AfFhM8E9CnqvHLlhCrdoCktAYConx1d74Tx02AC4Wya4UBgchw5PAYQ8nITqxp49S6AvsITxYStMJ_YbJ_Ihq7Mp0',
    name: 'Coca-Cola Zero Sugar Cans, 12 fl oz, 24 Pack',
    packaging: '24 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000043365',
    imageUrl:
      'https://lh3.googleusercontent.com/FmgGHqec4zvMh18U5-47jxdwBHHV-OLfeL2zoBEpNWaO_QvKnkskJBT5hoyc0VEhCJnpyM55ET0ffB7qX9NTfNV97VHBMRONzTCw9XW4',
    name: 'Fresca Peach Fridge Pack Cans, 12 fl oz, 12 Pack',
    packaging: '12 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000043884',
    imageUrl:
      'https://lh3.googleusercontent.com/Fe0noGAkggqpycN2_lRRDgarMmEJBkD6-9tfdoz_TC-dtcXNYK9T6PlhUNOvJYWBw9FC46kGtD4IxhHzOW9-UsWWOmbDbvMrkJCB-ZWh0Q',
    name: 'DASANI Strawberry Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'WATER',
  },
  {
    upc: '049000044225',
    imageUrl:
      'https://lh3.googleusercontent.com/zL1ElDZKX8c5eElriewoM3dgjyqC2c5clSAWHjSUa9VHwFkxz53yMLHUO6ewH8xLFTy4noSIQGmDmIXl7NkmajIlcTpuo_HGSUc_RORjXA',
    name: 'Coca-Cola Mexico Glass Bottles, 355 mL, 24 Pack',
    packaging: '24 Bottles of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000044362',
    imageUrl:
      'https://lh3.googleusercontent.com/xLb90QbybiPtFjgvnpD8LOcZ2sR9ixACzovHgK8-uUSRe9wrDzEkz-eo8bD8msjLEnFxuuGEPF0A3K6pLnp9MYj7MxiJ10rUGgQ6pzg-',
    name: 'Coca-Cola Zero Sugar Bottle, 1 Liter',
    packaging: '1 Bottle of 1.0L',
    category: 'SPARKLING',
  },
  {
    upc: '049000045222',
    imageUrl:
      'https://lh3.googleusercontent.com/hX26QL1Ij7pHhtt_4dy2EGyn5jJTbBPrFNZB2K4pLT_L0J5V1PEIQdhxLevCHRraKZ4FKCxcZiWTDo8I-9Knwm2ABtXeTNVgXdAHuWoJ',
    name: 'Coca-Cola Cherry Cans, 12 fl oz, 24 Pack',
    packaging: '24 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000045239',
    imageUrl:
      'https://lh3.googleusercontent.com/qQ-YO9BwiDEgIJfHEuAyI4kk4MENCH5PA96U3dI_pMmlAY94fJupLmfE2WXub-TJK3FP66Es0ZrgKBJZCL3BqB61bUmTTLg1essBI2E',
    name: 'POWERADE Grape Bottle, 32 fl oz',
    packaging: '1 Bottle of 32.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000045321',
    imageUrl:
      'https://lh3.googleusercontent.com/aPpm8hEvQ1GsPKaD6hlB7vMbQeHzZ71yg6P5CEWvC5Pu0-TNLL_ee5bbqVAFyNJaV3bl0GNRg_uN58V8zBpJe1K1WN-AqhmYwzASTYIMoA',
    name: 'POWERADE Grape Bottles, 12 fl oz, 6 Pack',
    packaging: '6 Bottles of 12.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000045659',
    imageUrl:
      'https://lh3.googleusercontent.com/hYOPBgD13nGhYB5F7tB2c4Q49X0BNfiuIWDbMzxNYuqjyo_Hra19cpaRo38yfjmUqHXvClYVPO0li9xswxgiPWUMKmR-McmNq6I5qK13',
    name: 'POWERADE Mountain Berry Blast Bottles, 20 fl oz, 8 Pack',
    packaging: '8 Bottles of 20.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000045666',
    imageUrl:
      'https://lh3.googleusercontent.com/wEEJXoTa-vPgZFyDXJm0HsYhu0X9_4gHC1CmNGpFvfWFICliK62E0uBovwkz1kX9NgXwtD9dERcHmT-QAHAGi4Hnkg',
    name: 'POWERADE Fruit Punch Bottles, 20 fl oz, 8 Pack',
    packaging: '8 Bottles of 20.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000045734',
    imageUrl:
      'https://lh3.googleusercontent.com/2LdaNnvXoWsBJBi7Sq_5sB_XMLbvcbpBIrhNdQOKJKbZT36UwOJxRFxLoTgoZxS-2BXThlsvzYszyhWtihza1mbjTJzLyjtNoRqsZUPY',
    name: 'POWERADE Lemon Lime Bottle, 32 fl oz',
    packaging: '1 Bottle of 32.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000045741',
    imageUrl:
      'https://lh3.googleusercontent.com/JrCVSfCnHYQxWMq2McGLL3zZJ52uI9_tfNbtuC7-z6iZKDjKwEPQpA4fGMHPCO00coP0jMd4ltbezzuR38u5sGz8zbX_4aFAurji5gpcvA',
    name: 'POWERADE Fruit Punch Bottle, 32 fl oz',
    packaging: '1 Bottle of 32.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000045758',
    imageUrl:
      'https://lh3.googleusercontent.com/batJSd3f7TBVavZ7W9u8c895IO0dAD5rG5-9D-V2hhaaJ8JK_aoxU78Askk-OqX_Y2kbDslUsKHLTxcZQWJjxM3z6YKqCYJjgmZxH2U',
    name: 'POWERADE Mountain Berry Blast Bottle, 32 fl oz',
    packaging: '1 Bottle of 32.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000045796',
    imageUrl:
      'https://lh3.googleusercontent.com/O4L0WMGf0vzcKNDOuWqIh03fOkxs49CChTpufgd4yLF4jSOasX5pWuUW2i3UYLeSUepk58pFxHtnuhpkFeq2aeNQJg5P8yG-TQsKoPQQRg',
    name: 'POWERADE Orange Bottle, 32 fl oz',
    packaging: '1 Bottle of 32.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000045840',
    imageUrl:
      'https://lh3.googleusercontent.com/lU034GkUVDjcISoGTlWbzwmSJHZs7uGVZdtlKP902CW3uM6YE3bdtwIBythyRwHvDUJGMDi746h2hGbaIwxPJxWtMG3RWTT0ZjqMSUI',
    name: 'Coca-Cola Zero Sugar Bottles, 16.9 fl oz, 6 Pack',
    packaging: '6 Bottles of 16.9OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000046601',
    imageUrl:
      'https://lh3.googleusercontent.com/QESxCM-ogxoBYEkpvcOxUHqDyimaklgFj6XPa_VsXjRzwzSUr4S5QHtD3LhadQuR89I1Isc8AMh8RXJZoAHApE5OoQBbEwB6q1i27U4F',
    name: 'Coca-Cola Zero Sugar Cans, 12 fl oz, 20 Pack',
    packaging: '20 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000047127',
    imageUrl:
      'https://lh3.googleusercontent.com/Ofe9OfejtI6es5a7nsvBEgrWwnnHdd5Dze8v_rwRGYQew0wXaTwfaKLlosCLyhTgBlS-3M41uFldvevwqT5qbwaxsQOO8mArsrIjVdOVYg',
    name: 'POWERADE Lemon Lime Bottles, 20 fl oz, 8 Pack',
    packaging: '8 Bottles of 20.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000047134',
    imageUrl:
      'https://lh3.googleusercontent.com/2-u1LuysvQl32EO9FpYVYrAp17cJODQiogNq4jlhX0mCbX06b4X2MOQttPC6LN6MRazQh4Vjp_-pdoJ19A9Z4GINOqM-bQ6Cf7TN7SU',
    name: 'POWERADE Grape Bottles, 20 fl oz, 8 Pack',
    packaging: '8 Bottles of 20.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000047141',
    imageUrl:
      'https://lh3.googleusercontent.com/-92vNPNMEuv7Ft92J-msv7Wa5GsQmCEA1hfKzmKT1CztBL806506zyJLCQLzwEcUC5TuwyAT91rUY1t64pdrtqEc8JhXVny56W0tODc',
    name: 'POWERADE Orange Bottles, 20 fl oz, 8 Pack',
    packaging: '8 Bottles of 20.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000047790',
    imageUrl:
      'https://lh3.googleusercontent.com/px0OQXgnY3cXAfX-TvaWR0QY_2tI-87Y_DPgqGfRhMFMvMYdsCrlY-_qxSyv5Y4cjLfxq8ZeekgqmjSO0-yKYDrRs3XxcWfpZk62eftx',
    name: 'Coca-Cola Mexico Glass Bottle, 500 mL',
    packaging: '1 Bottle of 16.9OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000047837',
    imageUrl:
      'https://lh3.googleusercontent.com/Kc2hbw-ATyTxFNRTM2hjMe4WXXTe7ebsNVGH6D-pRFDNskHxOoP4QHwXLYK0K_J2D721NyNRj2ZMsJAc4A4s0gzrds4kT4MgL7JRSXw',
    name: 'Sprite Mexico Glass Bottle, 500 mL',
    packaging: '1 Bottle of 16.9OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000047844',
    imageUrl:
      'https://lh3.googleusercontent.com/oVyWlPFD3KR9epR_ixrm7ulHHveuORnT8rmXPLtsyh57_URJeHjiWxjOlU8mvBCcfav1w9GJk-FXWhHt4CzSkF_ZvZOc9_r5TDVjtgU',
    name: 'Fanta Orange Mexico Glass Bottle, 355 mL',
    packaging: '1 Bottle of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000047851',
    imageUrl:
      'https://lh3.googleusercontent.com/Vmv9nLakP32x5M-0jTbTcmXbpSl6oxd0IEPqor5VsedFEbtIg7EJusFALFAc-vWFFn-Xvml6glN5M3LB7gkk66QfqbWIpbeyk9UhbGzd',
    name: 'Fanta Orange Mexico Glass Bottle, 500 mL',
    packaging: '1 Bottle of 16.9OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000048254',
    imageUrl:
      'https://lh3.googleusercontent.com/Is94KaSLlwPqPmLM5fL91uaC_SZt-GtNWT52SmBWNJ6yVq5kr1IXRGCV3zXGK3aCsPl6Rjpdwhcvfdkl1A-8_AbyX0dtnvylmIMmFzOKnw',
    name: 'Coca-Cola Vanilla Zero Sugar Fridge Pack Cans, 12 fl oz, 12 Pack',
    packaging: '12 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000048964',
    imageUrl:
      'https://lh3.googleusercontent.com/3kqrzaLoJphz-FDF8F4eKMdg-qyP46hB47G4zu-V4LHhvurXBWC0KKABYqdtfvJk4WKhgUz0I6Suzv-iNLNqnwMToSdlRYOXMdjD_d0QjQ',
    name: 'Sprite Mexico Glass Bottles, 355 mL, 24 Pack',
    packaging: '24 Bottles of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000048971',
    imageUrl:
      'https://lh3.googleusercontent.com/A2Wc__f1OlBcEg_nqRt6uPxa87Ka4jIkKM8Jdmw00o4nlAgHHoLWHjfkv0aCRvyLOAD2TYytkTvH_LRXnXZoDEgVdnk4dzWrSGejw_WO',
    name: 'Fanta Orange Mexico Glass Bottles, 355 mL, 24 Pack',
    packaging: '24 Bottles of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000049930',
    imageUrl:
      'https://lh3.googleusercontent.com/rSgRqxGvODOxrBwlpQ0-wDoBvwTDjrDVaGAA2gDttmJ5m1HwJ8ne0kabL5NREIZu9h0cBI3k8r-_K3EzihHLCyN2FukEcYQ5Bm4LNol3',
    name: 'Coca-Cola Bottle, 8.5 fl oz',
    packaging: '24 Bottles of 8.5OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000049947',
    imageUrl:
      'https://lh3.googleusercontent.com/q0KKSn9dkUXcMPKdMeEAmQ9KaQt7qHl6lN58FpezR9z_aoBrF6dYw40mk8wMb91By1Ae0Gh2jvQxkDq4yOdniz2WtqTkCFvzRVvGcn8',
    name: 'Coca-Cola Zero Sugar Bottle, 8.5 fl oz',
    packaging: '1 Bottle of 8.5OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000050103',
    imageUrl:
      'https://lh3.googleusercontent.com/ktceM47g8pmbDulqwpA2a-yHTJdZDqNYJPDDJzcaqSL7FEn1hs5KQyp_VQBGvYM7Zl371rmkCX1-XDpGtoOBgKyaFUypTMUbhSLfFHr8',
    name: 'Coca-Cola Bottle, 2 Liters',
    packaging: '1 Bottle of 2.0L',
    category: 'SPARKLING',
  },
  {
    upc: '049000050141',
    imageUrl:
      'https://lh3.googleusercontent.com/WmBDXJSu3M4c1ULB65A1tZ2np59Co-rIXFRLUtkghdtg7asPVUVC_Sjjmn1Sv0x6u5q9wrdIRVMojBdmSwuGI1-j3FPwSQ6Scq4nAaM',
    name: 'Coca-Cola Zero Sugar Bottle, 2 Liters',
    packaging: '1 Bottle of 2.0L',
    category: 'SPARKLING',
  },
  {
    upc: '049000050158',
    imageUrl:
      'https://lh3.googleusercontent.com/Eiin0kDp06VGUP8FQeVeU5h5nG482jHbzfHuIYJUOjVoYn29YVvdjPqlpeyuw2v9D1TeFIz2AQhUOJ0VKZ5fZ1x_yPoA979pLv0rExut',
    name: 'Sprite Bottle, 2 Liters',
    packaging: '1 Bottle of 2.0L',
    category: 'SPARKLING',
  },
  {
    upc: '049000050165',
    imageUrl:
      'https://lh3.googleusercontent.com/mEIVmAWsVdTOWODmcHDLT1-STaTVd486SYLwR68T_TqyBwGqpfrQfa9AkZo5Sp0BcYpi575Ec3aqu8FXXeLPJqcWf3o6a3q8eNyNCqM4',
    name: 'Coca-Cola Cherry Bottle, 2 Liters',
    packaging: '1 Bottle of 2.0L',
    category: 'SPARKLING',
  },
  {
    upc: '049000050172',
    imageUrl:
      'https://lh3.googleusercontent.com/t5qQaeh4BJk7nVU709MKhXyXewDfJStMheLncUUOAI4BIUulUp-HujR2Bc15nrkCo_HZDZnnJLmX5ln9spyiqaxThiKh5oB6Dy8WbS2g',
    name: 'Sprite Zero Sugar Bottle, 2 Liters',
    packaging: '1 Bottle of 2.0L',
    category: 'SPARKLING',
  },
  {
    upc: '049000050233',
    imageUrl:
      'https://lh3.googleusercontent.com/cu_9rafdxqHmIaP-q8sW_GY2IESj4QrEIH5jzN-UPU2au8MP9jThHj3THmz3UWFpMlUqyTa0IKQHK7P_4u5RdxucE1AQ_qwVlNGexo5P',
    name: "Barq's Root Beer Bottle, 2 Liters",
    packaging: '1 Bottle of 2.0L',
    category: 'SPARKLING',
  },
  {
    upc: '049000050240',
    imageUrl:
      'https://lh3.googleusercontent.com/eRboTys4B0iF4V9Dyy_CSbAuhi0QQM_BMUHmdj-mlFN6n3oTn7oOWTeKb4p1AuLhpAiePHzEE5nk1V0378F0VngVNM_GUqw96bboDqR8',
    name: 'Fanta Grape Soda Bottle, 2 Liters',
    packaging: '1 Bottle of 2.0L',
    category: 'SPARKLING',
  },
  {
    upc: '049000050257',
    imageUrl:
      'https://lh3.googleusercontent.com/PFqcSJahXe0HL1NxctGly2lHw-fPZ_9GGPc3xXYTI9RiSs7TPUd70GBLfz0v6PADYDsy85cwyMzLkFHUbRHw1ia2G8FgYRaQ0Rhucpln',
    name: 'Fanta Orange Soda Bottle, 2 Liters',
    packaging: '1 Bottle of 2.0L',
    category: 'SPARKLING',
  },
  {
    upc: '049000050264',
    imageUrl:
      'https://lh3.googleusercontent.com/KsRzP6pocim7vPj-YIRKAmqSMwHrNUeNXIAscWTKEdh7OdQvACvu9l2mxXQ5LFR5EA7GCX7DeQ-G8Fn0BEiB9SR8lyiNW9KUt96zpv9B',
    name: 'Fanta Pineapple Soda Bottle, 2 Liters',
    packaging: '1 Bottle of 2.0L',
    category: 'SPARKLING',
  },
  {
    upc: '049000050271',
    imageUrl:
      'https://lh3.googleusercontent.com/IxFMicH8za-DN9u4L9qJde3GMDCIy9UnvxdteTILye6OIpAeLaqhAkhiwTbA_bKmfGQZEVm_iLUYADV2pEEO8684raMdnguMl3Xe4K3N',
    name: 'Fanta Strawberry Soda Bottle, 2 Liters',
    packaging: '1 Bottle of 2.0L',
    category: 'SPARKLING',
  },
  {
    upc: '049000050349',
    imageUrl:
      'https://lh3.googleusercontent.com/4vYAXhEkMumpt6eyqQluARe0ovhVIx_r40BA6EBJ5aCgaTRfTmRj8n7eVRncrULPq_YlJEsf6mF2ali0XFrsG5efEYm2R5HHHMP9ES4MGg',
    name: 'POWERADE Strawberry Lemonade Bottle, 32 fl oz',
    packaging: '1 Bottle of 32.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000050714',
    imageUrl:
      'https://lh3.googleusercontent.com/zjvI8XK7hIwpt5z1xKGIekkbXZUK9PdrT3bPmXuy3qSgaBL2xXTtmIVZU6YVL6HKBuWDTqZlTCqW_wZZC8p4Fr9ZEV8',
    name: 'POWERADE Zero Grape Bottle, 32 fl oz',
    packaging: '1 Bottle of 28.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000050721',
    imageUrl:
      'https://lh3.googleusercontent.com/v-r__JkO15cZsmlTO6fI9kKwFTar6MYS3JWUOo_kRCgXIhsMo1AOrV5L1qHhjvTFbpQF7WEPLATtRKxSWPydvz0Lv07P',
    name: 'POWERADE Zero Mixed Berry Bottle, 32 fl oz',
    packaging: '1 Bottle of 28.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000050745',
    imageUrl:
      'https://lh3.googleusercontent.com/P-esEc1CNyweW-6cYxBq2JONegTUT6SuTPGhtPcARvfWVYZKP0tElXi5E-C3ePKOConFJF0qPgKwyyH8iEj4MDphf_9yh_P4r1Fy45bw',
    name: 'POWERADE Zero Grape Bottles, 20 fl oz, 8 Pack',
    packaging: '8 Bottles of 20.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000050752',
    imageUrl:
      'https://lh3.googleusercontent.com/i0Mdl_9xoT_sunbwmR_9ab22r_yYJuvmFUCXy02X-AC-LLuOxhZqjM-UBH0YZX_KJRLG2G9t4HLoDt4ybgx2sjUgZ7OZ9XHA3zB6_ks',
    name: 'POWERADE Zero Mixed Berry Bottles, 20 fl oz, 8 Pack',
    packaging: '8 Bottles of 20.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000050998',
    imageUrl:
      'https://lh3.googleusercontent.com/X7Hue3bbdCsqtZwn63l-8CfD6O_q-cE5iLp3zEVMpXG-JlHs9eKetjkc0zHBkJTqkBPEmY0CNfkWeaZerpbhMhAuFVpXxPI3t_dxFL4S',
    name: 'Diet Coke Bottle, 8.5 fl oz',
    packaging: '1 Bottle of 8.5OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000053401',
    imageUrl:
      'https://lh3.googleusercontent.com/VlGxD9vtv5Rh9cb8UWrh2PDhglME9V9jnlpyPAaoZZzAD7ymnToZerO3tbOGZRn1X6ynPmJ31L7DDm13YeodMHVAnmHzykkzerQWFdT_mw',
    name: 'Coca-Cola Zero Sugar Can, 16 fl oz',
    packaging: '1 Can of 16.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000053418',
    imageUrl:
      'https://lh3.googleusercontent.com/6YisV_RzhkkSfjavwZ4xY8h_W7jklmjXx-cpj5O9ue_6QWf19OemzQKH04vbApskLpqsjpO-ybbWYNJRcT6qR5XdJ_VZPDLoB_C4ChMw',
    name: 'Coca-Cola Can, 16 fl oz',
    packaging: '1 Can of 16.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000053425',
    imageUrl:
      'https://lh3.googleusercontent.com/nO4gKTiixy7yPrcY8AwcNDMjVwNzfK3OQhr9AwGSB1AIAffuCLJrLQtlpNKqdy_pOi-O-9cthmSD8fCGuDGK6jykTTU3qAYfXq-Q7vjb',
    name: 'Diet Coke Can, 16 fl oz',
    packaging: '1 Can of 16.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000053432',
    imageUrl:
      'https://lh3.googleusercontent.com/LRPECkwHpnPh2SoNjdwTa7GP2YfWGTwwuXgHRuyQ82FmX07MpFsywsQYbFY02Ya-PUkARp_66cSgfKg-Cc3etydMe_lIe_j1v3FqipFE',
    name: 'Sprite Can, 16 fl oz',
    packaging: '1 Can of 16.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000053746',
    imageUrl:
      'https://lh3.googleusercontent.com/n3qU8g-qWRslTVDUff-JYbOUToZblyqolPMCX2EeMSm-bGWhEYoIFtfSi6Qa52JYNwGYB-cvflmxYKhw9c_2n-WbOMI42Fui1B5kTMo',
    name: 'Fanta Orange Soda Can, 16 fl oz',
    packaging: '1 Can of 16.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000054026',
    imageUrl:
      'https://lh3.googleusercontent.com/ia1oK4OTRF1XiLxcbudrT9SJapDYkmOsLqX9yFtrQ3jfULG5gjq_BgY3lfIvPXjf1QHncdctQfyBQXyK4ihkpQ6wczmGsfYDe-J2gNSE',
    name: 'Coca-Cola Bottles, 2 Liters, 4 Pack',
    packaging: '4 Bottles of 2.0L',
    category: 'SPARKLING',
  },
  {
    upc: '049000054040',
    imageUrl:
      'https://lh3.googleusercontent.com/K9MIGqWeUYiTyF_BvkHXZGENy0lWzSb4Hw0zMuXrAXoXzVKdtVNqmg1I5rjPb_gt-kYNvlYllVWPuGBgEP8UE5Uh_FMB7kVtFYkquAwL',
    name: 'Diet Coke Bottles, 2 Liters, 4 Pack',
    packaging: '4 Bottles of 2.0L',
    category: 'SPARKLING',
  },
  {
    upc: '049000054057',
    imageUrl:
      'https://lh3.googleusercontent.com/gFAcLIga2D7IC2aJ_kTc_CJcQOzb-O7aVyRE0Mqm8ZEbLCqEwhZnvmRUgvV6w0J_Hs4IoKjFz39mG04s6niTgLYpjN4Ng3P0oAFfZF_m',
    name: 'Sprite Bottles, 2 Liters, 4 Pack',
    packaging: '4 Bottles of 2.0L',
    category: 'SPARKLING',
  },
  {
    upc: '049000054361',
    imageUrl:
      'https://lh3.googleusercontent.com/3x7VOb-CTOFauLRsD461DWlI1p7HTdgd3LkGJrnoKfPEAtH_sT3Czeij3o_-kJG-HzUrM38ThKDO921ZHr6VIxxKlwmiYPg1yVsHUqdq',
    name: 'POWERADE Zero Orange Bottle, 32 fl oz',
    packaging: '1 Bottle of 32.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000054569',
    imageUrl:
      'https://lh3.googleusercontent.com/67VMu2Z3JV91X6w30YKO1BcmivqCkbQ4Eqay6A3CX32P7xaVPgpuuK3BOre4fkftjNDjD3g9op26-3H569Y08zi7Ok3ufFwBHOKpT-8',
    name: 'POWERADE White Cherry Bottle, 32 fl oz',
    packaging: '1 Bottle of 32.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000054705',
    imageUrl:
      'https://lh3.googleusercontent.com/DkGc966GB4O_mz8otK7EcbyfIwChvLUuUkTyVmYwWQ3TAoufhQ0qRVl8QOUM93thMssVvwsC-TdEoX6pXnhzbzeXUgCV7kFvcJQtOqKugw',
    name: 'POWERADE Grape, 12 ct, 12 FL OZ Bottle',
    packaging: '12 Bottles of 12.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000055412',
    imageUrl:
      'https://lh3.googleusercontent.com/2g4MKc5Lzi07TVWgCQPsiVZrMuSxwl3SxHQvStef7_LsmrmQhyXHi19EYIibUkYWK52ms3_5Z7MQtHZ_YMOXwlsSmThsgYOOEZPki3zC',
    name: 'Coca-Cola Zero Sugar Bottle, 1.25 Liters',
    packaging: '1 Bottle of 1.25L',
    category: 'SPARKLING',
  },
  {
    upc: '049000055450',
    imageUrl:
      'https://lh3.googleusercontent.com/Mtg9ZTqkv41I_ZEZbKPhwGbD1hoy-6xJBBBKbPVxQHsa1oD-Vt0--ArU1e7BrnA_s8YK5NakLlNkZ525EuTB_-X5qHvwujlr6vdzVI1d',
    name: 'Sprite Bottle, 1.25 Liters',
    packaging: '1 Bottle of 1.25L',
    category: 'SPARKLING',
  },
  {
    upc: '049000055535',
    imageUrl:
      'https://lh3.googleusercontent.com/kYJTq2I1WYsLB1FeKkTSVXIZ7drU5UtWkP_xOKGWUOdjqy0Y_U-71hmGvUnYTcmLtyR3ZXFzGF712lXUiPMOMMDtxAlMdiPRky1L9Yon',
    name: 'Powerade Ion 4 Powder Drink Mix, Mixes To 5 Gallons, Mountain Berry Blast (blue)',
    packaging: '1 Can of 5.0G',
    category: 'ISOTONIC',
  },
  {
    upc: '049000055566',
    imageUrl:
      'https://lh3.googleusercontent.com/PCqqW3hGpcUVN2BRtBpTtoD9jzJ7pgwhwPIJCfV9bTacQDFPefESBGnrQiuLwhXmhfla0mK1LDKbBXc9WSXTg9vAwp-_dff1EfbOSgS4',
    name: 'POWERADE Lemon Lime Pouch, 1125.7 gm',
    packaging: '1 Packet of 1125.7G',
    category: 'ISOTONIC',
  },
  {
    upc: '049000056143',
    imageUrl:
      'https://lh3.googleusercontent.com/IOZieFhrQDgZT9f5V9M5vg1zUww2ZHs-zrFLIhLLcrS-m3IMA2UxzKOkWeNv9NFasTrk2Z_b4ZHtNYraCe-_dcrVqA43pp0tHlmy7LJJ',
    name: 'POWERADE Zero Fruit Punch Bottle, 32 fl oz',
    packaging: '1 Bottle of 32.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000056433',
    imageUrl:
      'https://lh3.googleusercontent.com/k0uoMnU37tllb-iIjCCBw4pYJu1i0wXjKiRrD5pvdX5vCHnUrM7o9b5BfYN0gG4NjQhl--2y56iVkkNhoWUHyrGatM9VAE6rOOENr3U',
    name: 'POWERADE Zero Fruit Punch Bottles, 20 fl oz, 8 Pack',
    packaging: '8 Bottles of 20.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000056761',
    imageUrl:
      'https://lh3.googleusercontent.com/A6jxTXeRCzc30CUWC5D_cZ7T8Y8JvDlD6D2hByU-1_d1QXen0m_aGYIVTG9H1RQ9-kF4ElxJJDhk42VVaC5dDoiRDPLsv3OCjJT-9_in',
    name: 'POWERADE Zero Mixed Berry Bottles, 12 fl oz, 6 Pack',
    packaging: '6 Bottles of 12.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000058451',
    imageUrl:
      'https://lh3.googleusercontent.com/XiezXc4sf0LjmN1aIMtHgrvihyg7g_isbafHJV8O5w8XnKNa8WYQrT76hAypP1rOnl2BexZKRj41H-Ohv5OmXlUMvLh2a6v268MmXCP3',
    name: 'Non-Specific KO Brand Variety Pack-Mexico Glass Bottles, 355 mL, 24 Pack',
    packaging: '24 Bottles of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000058468',
    imageUrl:
      'https://lh3.googleusercontent.com/86PpbZeVbUBTFKT6yaTMmy-78ORSs7d4IPbhV99gtzM5K12eZJkLBVsjK5AyrS39KWzBCxlcanVjwEl2ei8fxoEG-KZMAc_ywU0gXSg',
    name: 'Coca-Cola Cans, 12 fl oz, 35 Pack',
    packaging: '35 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000058475',
    imageUrl:
      'https://lh3.googleusercontent.com/oH4wawojweTYNLq8Ive4rS6n8fmcJ8hjLI2A6ejC8bo0XgAwL4g4VAiEWEbxVsjcGqM5vlTnUuVTUI8Jiw6OQtw0gecRIa_idQEBq4To',
    name: 'Diet Coke Cans, 12 fl oz, 35 Pack',
    packaging: '35 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000058482',
    imageUrl:
      'https://lh3.googleusercontent.com/kkmy_bleMpXa6QpqcDYx2265xrZFVVnR4tigV5RyS0-hypRIaT-M1XJGvB0VIhpvou9Ux7Wq3OkfPuQgVxtvtzF9xuq48c7fBc4gM2DG',
    name: 'Sprite Cans, 12 fl oz, 35 Pack',
    packaging: '35 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000058499',
    imageUrl:
      'https://lh3.googleusercontent.com/vtlBxYwnvw0Tdw3bdvFmMb_Mm1Fa42NYaNxCdPQLG6yRSt27M0J7rihKHQprjL7NXnrnRnxAZy2VQ7catONAoF7jlUp928r9gtJj-vX3Ow',
    name: 'Coca-Cola Zero Sugar Cans, 12 fl oz, 35 Pack',
    packaging: '35 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000059892',
    imageUrl:
      'https://lh3.googleusercontent.com/a1HErIftFunoxj0Rne1wJfq86_BC8cmlO2HKIpZo52qb_N9NMwy7QtxeeUcybyxrdWltAyoziFRJQjRMonyHDd0-S8AgO_nx8BZV6j0v',
    name: 'POWERADE Melon Bottle, 32 fl oz',
    packaging: '1 Bottle of 32.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000060423',
    imageUrl:
      'https://lh3.googleusercontent.com/CJGEkllqAQDUACXcZzEMncie1oSbjmfiw4v0DaTYcfHPozJ7YyeL0b1a4HU5_H7OU0scp9clZTfVMPjkKCi6DEBCpVwMfJEUzXZUI2I',
    name: 'Coca-Cola Cherry Can, 16 fl oz',
    packaging: '1 Can of 16.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000061017',
    imageUrl:
      'https://lh3.googleusercontent.com/6xCKUKOyAE1V9blBogUErFUQWiTJKvPDuGfym3KN3utqeC-1Yv1utRcPRWcmCHtDHESi-iF1pUF4RscWaFyEvJ03aVEOpwXulYm4qSA',
    name: 'Coca-Cola Cans, 7.5 fl oz, 6 Pack',
    packaging: '6 Cans of 7.5OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000061024',
    imageUrl:
      'https://lh3.googleusercontent.com/mOxoGpEycbWRF8M7chzd_pj4PLfJRjlKgiKIOb_gbCzpZ9JFqVdeJ3AvnoY11YMhQCK9IZzZJeQYVuoY_m4tlzW_5IxVLWcLoAcx8myE4g',
    name: 'Sprite Zero Sugar Cans, 7.5 fl oz, 6 Pack',
    packaging: '6 Cans of 7.5OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000061031',
    imageUrl:
      'https://lh3.googleusercontent.com/HMW7VYJ9nbDn7tshviy8Dy99B5IgplID2lld7ItuEUP0XKKp-_2GSLcgX8HS-TkrG_MRSS4jZsNsV_NNsgtf3z2mBUtkmLNcIyzjyX9pdg',
    name: 'Fanta Orange Soda Cans, 7.5 fl oz, 6 Pack',
    packaging: '6 Cans of 7.5OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000061055',
    imageUrl:
      'https://lh3.googleusercontent.com/qNjLkxopj2lJr0q0MSeKI8_DfN1p00XCtXfLXEdzSPgCFj8ChI36JFO1BO9jm0i33sxByYGyEL_tzfKq6Ms3mL12YwhXY1fQnrdayNM',
    name: 'Diet Coke Cans, 7.5 fl oz, 6 Pack',
    packaging: '6 Cans of 7.5OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000061062',
    imageUrl:
      'https://lh3.googleusercontent.com/93xLEicux6FnijPsIcO2XKRz7jb6z0oIClapDeIhJtUN8i-hMTt2LHXRbKlRrz6PlX1PcYN0YQ0qLRwo_SPoogI4jfGpnJcXhccZfgcO',
    name: 'Sprite Cans, 7.5 fl oz, 6 Pack',
    packaging: '6 Cans of 7.5OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000061178',
    imageUrl:
      'https://lh3.googleusercontent.com/yT_56s76PJIeWZAfgJTevtGtQcLUi70JE8JImMY2dq8UvHnnJyg41I0fUGjZYYx9p_tz7HoCNf0M5bEcOFW5uYOY2F3WyT1wMIjQXaQv',
    name: 'DASANI Purified Water Bottles, 10 fl oz, 15 Pack',
    packaging: '15 Bottles of 10.0OZ',
    category: 'WATER',
  },
  {
    upc: '049000061598',
    imageUrl:
      'https://lh3.googleusercontent.com/kqks_Y0t2BDdLNd8OkPsQzHW2K4ko6Cqcbbzchi9lz6UW_KiC9G-Fd9WUHybFj1c8h6XJCERhGkSNlDbFZJW3S-dEudewcsiwpLViNwLWg',
    name: 'Sprite Cranberry Fridge Pack Cans, 12 fl oz, 12 Pack',
    packaging: '1 Can of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000061635',
    imageUrl:
      'https://lh3.googleusercontent.com/BtRw0gKI35P85ryqhjV3MJ5kVBoxFBbSZ-wmrueKGIA_j9W7EcED7Opmschecv86h5qVumQAEvOTCSM0gH5yOlfMrZCWbk_j4Ib3eX2J',
    name: 'Sprite Zero Cranberry Fridge Pack Cans, 12 fl oz, 12 Pack',
    packaging: '1 Can of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000062816',
    imageUrl:
      'https://lh3.googleusercontent.com/qCLLsJJgtH3xvj4gsaGkZIFG89ihLgZgB9DA_86oYdrVbml0xf0PNl83iX_ZiSBDkO17zoEJ6V02U37Ps-q7mFeNyOReN5EVtTLZ_8bt',
    name: 'Fanta Grape Mexico Glass Bottle, 355 mL',
    packaging: '1 Bottle of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000062823',
    imageUrl:
      'https://lh3.googleusercontent.com/ALew4Wy_wAoT5tPNMum-t7-AtoTZoenbiLgqRySYpYd6DdmTM8_ruQLn5o3xPx8O438LvfuxVM0fYaGOPAm2asXGr7nOphWeRygolSYi1g',
    name: 'Fanta Strawberry Mexico Glass Bottle, 355 mL',
    packaging: '1 Bottle of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000062830',
    imageUrl:
      'https://lh3.googleusercontent.com/YUpjx_UyCZcPeXyfuCpbwpDqkledpOHzgCIsswvMlfNxEz1EOfLF7t5NByB-D_fctUhWbDhEq-5nEV-pxJ7HjkT_dRUOCPof6ORKERmn',
    name: 'Fanta Pineapple Mexico Glass Bottle, 355 mL',
    packaging: '1 Bottle of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000063257',
    imageUrl:
      'https://lh3.googleusercontent.com/I8JRiSFuxJ4Ba1uQJdoejKaTr-GwiRJN43xElatmJvLuFvVPZ3Q_jvrp6yF7GRdIKxK7I293o3zyJNQ-rdtLyKE7KSzYKywFCmM8ycI',
    name: 'Fanta Grape Mexico Glass Bottles, 355 mL, 24 Pack',
    packaging: '24 Bottles of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000063271',
    imageUrl:
      'https://lh3.googleusercontent.com/XfcaImjbCEvYzfD2DF6CiyZZfUgSRccJHF26a1nfngwjih-79cCOkH3f30tZO9wWKDI0U8xnyr2WIzajGjM6-xXTmbgJ63hM9twh9dni',
    name: 'Fanta Strawberry Mexico Glass Bottles, 355 mL, 24 Pack',
    packaging: '24 Bottles of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000063745',
    imageUrl:
      'https://lh3.googleusercontent.com/bKgylt0Y3QluiNMstRwLoUuu4jmaixBjMF6IkFj90TSFF9ssGQS24NWYwGcE3hGyblR9BQ5GHkN5mFCSx72LwlPDvbz79YEJFTiBo4o',
    name: 'DASANI SPARKLING WATER BEVERAGE LIME BOTTLE 20 FLUID OUNCE ',
    packaging: '1 Bottle of 20.0OZ',
    category: 'WATER',
  },
  {
    upc: '049000063783',
    imageUrl:
      'https://lh3.googleusercontent.com/DPaXf9_EC9LL6tV_CT7_oH91KNYG31BVofffNdFAv8J2KJnPKeLNaXAMdcJjIK4NvMwApfawtgJrcnYNXQFsilmKH9iZyvpF3Lwj7zyg',
    name: 'DASANI SPARKLING WATER BEVERAGE BERRY BOTTLE 20 FLUID OUNCE ',
    packaging: '1 Bottle of 20.0OZ',
    category: 'WATER',
  },
  {
    upc: '049000064063',
    imageUrl:
      'https://lh3.googleusercontent.com/FjwWCrD86siu4mDy0slEtO0tViAIRK85Xvy5Kk6zY4JeDEivbWReHFW5rLxaKefKMtMX7qXOWo8a_h9_HRPx-hfxC1YCKHQ8O7O4gKOJ',
    name: 'Gold Peak Sweetened Black Tea Bottle, 64 fl oz',
    packaging: '1 Bottle of 64.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000064070',
    imageUrl:
      'https://lh3.googleusercontent.com/Uot6lUTTtEyqRxq3oh99RO6svXlvNyELdzp9-xUZM6yi8m4caHILw0mz-oCitYb50idKa5GdTB8YwbLi_COIedJioJJwwBgPdiN-l-7Tuw',
    name: 'Gold Peak Unsweetened Black Tea Bottle, 64 fl oz',
    packaging: '1 Bottle of 64.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000064230',
    imageUrl:
      'https://lh3.googleusercontent.com/ArS9dOSReKQtAi5DPSBrCNMOd45sAJcSYVQa6JSjmyFyc1RC1FrdoJImUndpj47QNgcfstKTrZ4iAWnRpB6nc7hcHCGUH8732H9Lwxj-',
    name: 'Gold Peak Raspberry Tea Bottles, 16.9 fl oz, 6 Pack',
    packaging: '6 Bottles of 16.9OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000065596',
    imageUrl:
      'https://lh3.googleusercontent.com/sILu_5p620CSAKrTZNE0MM5t2eRv3B_o_UjXOpexdYKT8HozEGIPv4lYF4aP2F6fAe5UxIUeW8obm_ryKbTULugtcUec9aaslrzqHVw',
    name: 'Gold Peak Green Tea Bottle, 64 fl oz',
    packaging: '1 Bottle of 64.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000065633',
    imageUrl:
      'https://lh3.googleusercontent.com/vUog48GBeN6rWjseUAKZsf-eu1Dxcf9VT3cmRpvGBP8DwBljWZ8q-OEr99nNDgSzsyB-UgOE-SG6eiUY8jn7CRW_Vq1bV_KzjONaRT0',
    name: 'Gold Peak Unsweetened Black Tea Bottles, 16.9 fl oz, 6 Pack',
    packaging: '6 Bottles of 16.9OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000067194',
    imageUrl:
      'https://lh3.googleusercontent.com/SH1iiym1UPeURlGw7aJOYiqgYVGp0ikbILwubcGnQeeMwJW_5OSZaIQy2YbNSpLSANLxJ8IHkZhvuTlU47G1-jFS2uNnwf_x7qd6VzJh',
    name: "Barq's Root Beer Cans, 7.5 fl oz, 6 Pack",
    packaging: '6 Cans of 7.5OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000067217',
    imageUrl:
      'https://lh3.googleusercontent.com/9JfBDAPhmLpKkRnJJEIa-eqPzrBsLmhfpUi3iB_JGz5i6PDHEmTAi6EVHTrjqJiiYcHLakfbyoXjKZstrIjH8RpYxtc45Y4SQ-iWpKbz',
    name: 'Coca-Cola Fridge Pack Cans, 7.5 fl oz, 10 Pack',
    packaging: '10 Cans of 7.5OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000067224',
    imageUrl:
      'https://lh3.googleusercontent.com/nDzCutuekrx-EHl8F6719qidtIXQ4AniAvl6jYH3IxcS3LS65dyUfEqr6eNK9qH6jY9xYy7dNljOPeGpQ9T7sstnJeAnfvy6yUGCZYtP',
    name: 'Diet Coke Fridge Pack Cans, 7.5 fl oz, 10 Pack',
    packaging: '10 Cans of 7.5OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000067927',
    imageUrl:
      'https://lh3.googleusercontent.com/z7PnM8z1zVM8DFGCXBrCb_jJlPuBC4jgCMTRCJ5KgEkON1AoWslgO8mJcN4-8KzFrUzWJebqBU8zfyZIXsNwB51DSfTeH4ieo62nqATj',
    name: 'Gold Peak California Raspberry Tea Bottle, 18.5 fl oz',
    packaging: '1 Bottle of 18.5OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000067934',
    imageUrl:
      'https://lh3.googleusercontent.com/37IGxJNs0ICtaDfATrmGOvyz3yj7qcwOyJW6zbFJYPRJ1Vif0n2l2x9JA-wEzLBylFY2quFjq0qISvfOcMd2QRXMicEdUytUtSchIGI',
    name: 'Gold Peak Georgia Peach Tea Bottle, 18.5 fl oz',
    packaging: '1 Bottle of 18.5OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000068276',
    imageUrl:
      'https://lh3.googleusercontent.com/5C5kz5KZKyeLI1TEwYYBGjTLEIlm1WdWJ51MjvZPiDmRDtL5ObjaDAnolf1iA-D0d5FSBCreB2U36kgkCyVREhUC6jKJdsn2uJB6-uw6',
    name: 'POWERADE Twisted Blackberry Bottle, 32 fl oz',
    packaging: '1 Bottle of 32.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000068283',
    imageUrl:
      'https://lh3.googleusercontent.com/cIImdJEm4-69MOUlM18sSQwvtfTIalGWEpLgtIe_5h2KZFdTn47nUajxn6PAkXV91OwjMwsaJ09-INhiytKra9GB6EGZg3MPLqYKuWXhLA',
    name: 'POWERADE Watermelon Strawberry Wave Bottle, 32 fl oz',
    packaging: '1 Bottle of 32.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000068672',
    imageUrl:
      'https://lh3.googleusercontent.com/SRCxDnJlWH0WtQOERUvOWh0kutttr4OGPqTUxwM0ypFr1dJKTVH9ux3QlBD4E2GM1j5wPPbSEtiC3YjU1SK-a5O7K9DSxO3GljKbAEg',
    name: 'Gold Peak Green Tea Bottles, 16.9 fl oz, 6 Pack',
    packaging: '6 Bottles of 16.9OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000068825',
    imageUrl:
      'https://lh3.googleusercontent.com/VMRU9E4grxsnIVKRCW5C2a4oOvCwSRjn1IC0VKDsMRPHiy1lbw69PMrTfURdLSExpkGe0dD8RSwIoanXUaTno7Zu3A',
    name: 'Dasani Sparkling Raspberry Lemonade Water',
    packaging: '8 Cans of 12.0OZ',
    category: 'WATER',
  },
  {
    upc: '049000068832',
    imageUrl:
      'https://lh3.googleusercontent.com/nFM6WfDCXqRn4zRa6OoncdFx2U79ElNyxR87JXydC9xkJHdb3A6YDMzSXT0E5Y7I5YWwEutf-y8qXEQ65cmwSiwVoA',
    name: 'Dasani Sparkling Tropical Pineapple Water',
    packaging: '8 Cans of 12.0OZ',
    category: 'WATER',
  },
  {
    upc: '049000068849',
    imageUrl:
      'https://lh3.googleusercontent.com/WlbYkuD5T6mpcQpoHzTcxI18hgb01_lBz0zdHr21PEv7kGBC8WLHXIuxA76xOqHw_vFGg_xAFEU56F5SyWQkhXSuFvqt',
    name: 'Dasani Sparkling Lime Water',
    packaging: '8 Cans of 12.0OZ',
    category: 'WATER',
  },
  {
    upc: '049000068856',
    imageUrl:
      'https://lh3.googleusercontent.com/59Eij6gtQ_btQQGVmTeUFhtJcFXpVPSX-OqrelmTmGq6O4l7Uejg7fDJ37DxgMt8A-_3ZrU1nzAf6nHzoFQoA-fphM0',
    name: 'Dasani Berry Water 8-12oz Cans',
    packaging: '8 Cans of 12.0OZ',
    category: 'WATER',
  },
  {
    upc: '049000068863',
    imageUrl:
      'https://lh3.googleusercontent.com/ilm4QnKtle2ZmQI4-RYYKTY1lWsYxaosCqyL4IPK7zsMHNyGxieoWZ5BeKXVUpHWP6qysOSde7v5EvEoVyZWy8k0a9g',
    name: 'Dasani Black Cherry 8-12oz Cans',
    packaging: '8 Cans of 12.0OZ',
    category: 'WATER',
  },
  {
    upc: '049000068870',
    imageUrl:
      'https://lh3.googleusercontent.com/X_jWzzKmbEgj5-0DoCzMVBDKYDipsoYNxRuus9K60U-aaN8eflI0GitKI6GbuDNg-JtSyAEl21t2ZExuIMKM4qRt1i0i',
    name: 'DASANI Sparkling Lemon Fridge Pack Cans, 12 fl oz, 8 Pack',
    packaging: '8 Cans of 12.0OZ',
    category: 'WATER',
  },
  {
    upc: '049000068900',
    imageUrl:
      'https://lh3.googleusercontent.com/U9v3EFLzipqZHFMZ0l0wJveZ3ZMQgLbQkwpz5eg4ujajBaXBEaACehRpLyWwE19DT4T27MvEkJzKSl0zx7zqSEIOkg',
    name: 'DASANI Sparkling Raspberry Lemonade Can, 12 fl oz',
    packaging: '6 Cans of 12.0OZ',
    category: 'WATER',
  },
  {
    upc: '049000069143',
    imageUrl:
      'https://lh3.googleusercontent.com/LrMxJPUSAPsAYQmxM07nXFW1uUMMjuYRWxcvMA8boKAFk88-PGC7tZxHkJ7CVpM3DckTZvQCknEZ1DfvkbZxb-K4aIaE2NLx5Vck4th4',
    name: 'POWERADE Fruit Punch Bottles, 12 fl oz, 12 Pack',
    packaging: '12 Bottles of 12.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000069150',
    imageUrl:
      'https://lh3.googleusercontent.com/YaFWNZE4BZrs64bF9v5hk2r3J2ksdmsyYzZ0rXhmWwijdQIvcz-nw1TTa1JE6Z2VKbxMKnFfcOYKGLkxHERY7unTzHBLHRyZJadvnNQkUQ',
    name: 'POWERADE Mountain Berry Blast Bottles, 12 fl oz, 12 Pack',
    packaging: '12 Bottles of 12.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000069167',
    imageUrl:
      'https://lh3.googleusercontent.com/WhgzN4DiRCfkZpU-4qzSqzsYsn3BXvC6LdZeHbhI6EUfz4CLbaUur4u-yOIXZHLqccm7SF8uOCEfdZ6hOB1Dj4P6pyLxLpQj9TeYn281Kg',
    name: 'POWERADE Grape Bottles, 12 fl oz, 12 Pack',
    packaging: '12 Bottles of 12.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000069174',
    imageUrl:
      'https://lh3.googleusercontent.com/MwdZGLJj-ZjZlKlItzOKQn9l_0IcoXNB-QwL8IgKKXj_Q6om_LcWtYLCVcoWcq7MXVWXTZQNV8sh46cppnE9MVt9EE5j_559DGRjMjM',
    name: 'POWERADE Orange Bottles, 12 fl oz, 12 Pack',
    packaging: '12 Bottles of 12.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000069181',
    imageUrl:
      'https://lh3.googleusercontent.com/nG7OqGMFyetC0Zu9EJKlOEGAWH9iWXT6TgUOJcpevbxz9SD9v7QsnOa-sq794yjyVB08pnnU5uxUEsUFviBuLWh0i6Gmbirh_eOUBJKR0g',
    name: 'POWERADE Zero Mixed Berry Bottles, 12 fl oz, 12 Pack',
    packaging: '12 Bottles of 12.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000069792',
    imageUrl:
      'https://lh3.googleusercontent.com/EgkIt0Il8Hjr4SFWlQcYMePeFUBAuJdVT7-io0STZqDaYw2Qk2La0bCsvot-M-tPf_x4RlySRsXjpOF08juE379EZe6FM_zSnn9tPfhK',
    name: "Hubert's Lemonade Blood Orange Glass Bottle, 16 fl oz",
    packaging: '1 Bottle of 16.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000069884',
    imageUrl:
      'https://lh3.googleusercontent.com/iyskRfgfabb2rj6q7OPLWpDdyV2xLbLGGKgjtBC_eDYRf8i-YrTOOr9ocm2oKcjRqtD0AHRjjFsSxNVil5Vbf3LYOtJeEEFNZLoJSKc',
    name: "Hubert's Lemonade Mango Glass Bottle, 16 fl oz",
    packaging: '1 Bottle of 16.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000070408',
    imageUrl:
      'https://lh3.googleusercontent.com/-VesSHzyGbhPAwlPV6wULDJzS1-P1UcKUkFj01EcnU4GuxYHEtR3ZnZd-OLtfolVzylYJUsGcE2Lqr7kcb5-MYb33uZxcqDfOEu7ZQFN',
    name: "Hubert's Lemonade Watermelon Glass Bottle, 16 fl oz",
    packaging: '1 Bottle of 16.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000070422',
    imageUrl:
      'https://lh3.googleusercontent.com/U4ybNk9sBVrWbppCxNIbQPA9PZesgLWixQ2xKfww_HFbzumFKNMwJBmudI80V55YdXBtpBbLMc_RW_Ta7DTOTq580GSlJH8NwRG1GkM',
    name: 'Peace Tea Caddy Shack Can, 23 fl oz',
    packaging: '1 Can of 23.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000070439',
    imageUrl:
      'https://lh3.googleusercontent.com/rDvtu3TqGNyNJx8M7t5Jlv5KjV7lKX0qLtSpQeuxeFKDHsQitKYNIxDVp5fBXTx1SaFnKvKEHmNq_Drua4ng018X5QtvVja19ODyAbVb',
    name: 'Peace Tea Just Peachy Can, 23 fl oz',
    packaging: '1 Can of 23.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000070446',
    imageUrl:
      'https://lh3.googleusercontent.com/CdUHYa6ahrzmvUVvB_Z_wV-4Kt0Gz42oYpU5U8vnAmoahhZJyNhRcTZ20i5ZXfjt5P0q_6K9N2nsjoE7IoDjXQwv1pDAzRP2r_grkp3FtA',
    name: 'Peace Tea Green Can, 23 fl oz',
    packaging: '1 Can of 23.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000070484',
    imageUrl:
      'https://lh3.googleusercontent.com/Mrx7IN_77HvxXNbbbz5lsoeJr9Xhxfc5AGEI1xpjU75xjljK4Y-HSveur_PT69XSMyKSB_NVN-ErSVPvIPuRNIZp6g',
    name: 'Peace Tea Razzleberry Can, 23 fl oz',
    packaging: '1 Can of 23.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000070507',
    imageUrl:
      'https://lh3.googleusercontent.com/wQQkRElyN85iocnY4Jq2Pg9e-9fhzavhTIIAHfzk3jruMxqmYjRrKTjCQKAqVcBNC5Ohqewe4YLBsqUFwyUYML3AHIUyFDotuiY48Do',
    name: 'Peace Tea Sno-Berry Can, 23 fl oz',
    packaging: '1 Can of 23.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000071580',
    imageUrl:
      'https://lh3.googleusercontent.com/_wHWAjNjV5WOIuBQx5C4kvXIypv8fWkgA85EwT8M3Dtvza14Yb4UDPB5zHZlpatmsAryW5Zda2o1YUA9DzNPpu4hgDy819FB0fmSqkzY',
    name: 'POWERADE Mountain Berry Blast Pouch, 1108.4 gm',
    packaging: '1 Packet of 1108.4G',
    category: 'ISOTONIC',
  },
  {
    upc: '049000071634',
    imageUrl:
      'https://lh3.googleusercontent.com/CZQXgg8AjCih7_iHovk2uijYz73DAJDgvVBJKAMvhvj4WiHXSl0yeWe3Ypw4zXsqLemrbwSBO8iH4fl8rISpby5-Kj04_-_urDPtnrVu',
    name: 'POWERADE Tropical Mango Pouch, 1109.2 gm',
    packaging: '1 Packet of 1109.2G',
    category: 'ISOTONIC',
  },
  {
    upc: '049000072297',
    imageUrl:
      'https://lh3.googleusercontent.com/NaymPtbZ8BlpWVJAJOSdDVFsezUlCLicUxORCFCyz1Dn5I0nJ3uHeLwpcWP38DQXOuxCYgclq-hKd2ZeC4eOuuUySVFqfO9huvhKLtv1',
    name: 'Gold Peak Diet Green Tea Bottle, 18.5 fl oz',
    packaging: '1 Bottle of 18.5OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000072372',
    imageUrl:
      'https://lh3.googleusercontent.com/cKouYPKFV4jaE5XQ7gYiirLEcwnQ37g5wweSfMsdzIAnCKQasWx8Y4w9Fy0C8vqskyKLlNJCWv9KyQcivQTt7aUwLhYXwgpJaBZSuIxC',
    name: "Dunkin' Original Iced Coffee Bottle, 13.7 fl oz",
    packaging: '1 Bottle of 13.7OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000072389',
    imageUrl:
      'https://lh3.googleusercontent.com/KEXeNbBqYXbhVJMqwR22jRwbPGFKyGtfpTZ-pVUqpmYeiSiRdhdIgQmyEJntrfIF-eFJ5f1SDmYT_HD6OX7Qp6i1-W-LrWZ9bjTsuGvPJg',
    name: "Dunkin' Mocha Iced Coffee Bottle, 13.7 fl oz",
    packaging: '1 Bottle of 13.7OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000072396',
    imageUrl:
      'https://lh3.googleusercontent.com/6dJkTaeNI442BxIhC1neV3fw721Uy3SVGS6C1y7LuWViCU2gK1s21pOSkDLNs_y1hzpr7Egx0wkALib68hyK6FnsZozhunla21Id_Utx',
    name: "Dunkin' French Vanilla Iced Coffee Bottle, 13.7 fl oz",
    packaging: '1 Bottle of 13.7OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000072433',
    imageUrl:
      'https://lh3.googleusercontent.com/YEZw61WwiWxzknMK3p1zVtJyohDxEpC8kymR6h7kdYdfBS6uBR4V2dsSXL6PGHPCvCYHrXTvwEpXTcJH9LXC3NXlkF4',
    name: 'Dasani Sparkling Strawberry Guava Water',
    packaging: '8 Cans of 12.0OZ',
    category: 'WATER',
  },
  {
    upc: '049000072471',
    imageUrl:
      'https://lh3.googleusercontent.com/wVK6deYGuaVHRZHGXVCRLnfBCr8sn4cUbSdcJlOikrdCh1M8DDNOKvFPdiaCJdrT-WEJbpOJ_xG5d0A9J4AvDSUvfEkG',
    name: 'Dasani Sparkling White Peach Water',
    packaging: '8 Cans of 12.0OZ',
    category: 'WATER',
  },
  {
    upc: '049000072556',
    imageUrl:
      'https://lh3.googleusercontent.com/SRWP4EMlxI9M1RHW-n4_KBlYq3wmwANyaEnYnNJuWdhvCDtwziwbhJz_0OX4cU3NxZ7fMaWTuzpm8dIR6tzQyFh0qA',
    name: 'DASANI SPARKLING WATER BEVERAGE BLOOD ORANGE ZERO CALORIES CAN 12 FLUID OUNCE X8',
    packaging: '8 Cans of 12.0OZ',
    category: 'WATER',
  },
  {
    upc: '049000073454',
    imageUrl:
      'https://lh3.googleusercontent.com/fh1T6lh-TUUNa4mldDHYY4Pq_HSMQyIVmh6RdBIQVe6tSQcwGb8qPGCLW-82lthSA1N79U2DDVCn7aLk2DQFYazqA1qbnxdbpdVkByNhaA',
    name: 'PWD PA POWDER 5G 1CT',
    packaging: '1 Bag of 40.6OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000074529',
    imageUrl:
      'https://lh3.googleusercontent.com/PM7LQYz0MbrBHCT91vwxNcOoFzLDnyUnqQj0hPTKI4hedqk-njuSCjGQe58mwawNxxeAJOO347kieTyiRRbAmfY32nSusp5vit87_NgxKQ',
    name: 'POWERADE Blue Raspberry Cherry Bottle, 32 fl oz',
    packaging: '1 Bottle of 32.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000074840',
    imageUrl:
      'https://lh3.googleusercontent.com/orNABX3ua1xag3ZeuHgys7ehs6Ku7kBYah_Yr9H_WdoD4_HaAsmhG9BOqXM5CheUOsGzp-OR3eyA8jKs-vbPFAyy8w_VJ5GHm6ID9j_ITA',
    name: 'Diet Coke Fridge Pack Cans, 12 fl oz, 8 Pack',
    packaging: '8 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000074871',
    imageUrl:
      'https://lh3.googleusercontent.com/hucuBVPDQavl_5Mfan2bE7o3w0RveWAnVR2gPDieJcuPXydz5p6R3xF2QEpYbQkC2b4pl_RNvnipSW1kWQrS7tR2wFMYQ1GXd8kb-9A',
    name: 'Diet Coke Mango 8-12oz Cans',
    packaging: '8 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000074895',
    imageUrl:
      'https://lh3.googleusercontent.com/vw2rejBQO5jC7ennQDE8GXadDvBvzS-ZR7XtazhV8cx7Ydi82SjZ1PuCgamAmOLeQ02B3XtFDkX1yizSxBOx-RvfkA',
    name: 'DIET COKE SOFT DRINK ZESTY BLOOD ORANGE COLA DIET CAN 12 FLUID OUNCE X8',
    packaging: '8 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000075045',
    imageUrl:
      'https://lh3.googleusercontent.com/1X7borJTnnGwoej7RQH2cw8JqyhIdzk8wAc_oR5lbgnPtW51fljgBsIfrY2ZUWPlDGqJ1XbyTDKOI506b-fOsHJbAEh_',
    name: 'DASANI Sparkling Pomegranate Blueberry Fridge Pack Cans, 12 fl oz, 8 Pack',
    packaging: '8 Cans of 12.0OZ',
    category: 'WATER',
  },
  {
    upc: '049000075069',
    imageUrl:
      'https://lh3.googleusercontent.com/Cut5uz-WtEIB7uNZJXJA0KE_yxdDepGwYlCNf3f8BAgYIVTTB4y4R-MbbdEXcBRtQ0oSEpgt9YlS81CwPcrTGR_NI-g',
    name: 'Dasani Sparkling Pear Kiwi Water',
    packaging: '8 Cans of 12.0OZ',
    category: 'WATER',
  },
  {
    upc: '049000075106',
    imageUrl:
      'https://lh3.googleusercontent.com/t_FREGWl77MgjRE1vT577HYcDEJ56836DMR-BP580vsh_Te8vhbU8_fBIZe8Zv3V0Jw9O4fi1R970xI_m2DjxvYNnNk',
    name: 'DIET COKE SOFT DRINK GINGER LIME COLA DIET CAN 12 FLUID OUNCE X8',
    packaging: '8 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000075120',
    imageUrl:
      'https://lh3.googleusercontent.com/-R_yTVafRcAd9a44-Dg_XdrRP45wcnSfjMQuzzjLk9obejOjglfI-Y6Csuh5DryUBUpuvrDTa0Y0IhsS1FeVAkTpvx0',
    name: 'DIET COKE SOFT DRINK FEISTY CHERRY COLA DIET CAN 12 FLUID OUNCE X8',
    packaging: '8 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000075304',
    imageUrl:
      'https://lh3.googleusercontent.com/77YSD0kc52I5_zOSwkFvfbCs45V_ENt5iXGqiDxR3KODl_6CFH6M6hYjWablcV7fcfIsv2LnxY2xisT4fAmGlNnqxTY',
    name: 'Mccafe Vanilla Coffee Red 13.7oz Bottle',
    packaging: '1 Bottle of 13.7OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000075311',
    imageUrl:
      'https://lh3.googleusercontent.com/zc14N9B_OB7FnJelQbcynFgJJvtnp8cSwwX68YQ9vH7wksb1hIHXwLSJD54N9MBSWwvI3KSxwByDE4jtsUvVaKkHSicf',
    name: 'MC CAFE FLAVORED LIQUID COFFEE MOCHA FRAPPE BOTTLE NO CARBONATION 13.7 FLUID OUNCE ',
    packaging: '1 Bottle of 13.7OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000075328',
    imageUrl:
      'https://lh3.googleusercontent.com/EFpcp1sbLrxBOztalanBGB9dfSpEcPjods84ui_9XGQEGr4uImNXBx887pC3PlrVUS5IfXE8APsDZq4vX7vBav1i6MY',
    name: 'MC CAFE FLAVORED LIQUID COFFEE CARAMEL FRAPPE BOTTLE NO CARBONATION 13.7 FLUID OUNCE ',
    packaging: '1 Bottle of 13.7OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000075441',
    imageUrl:
      'https://lh3.googleusercontent.com/4SlLGGal7s5zLsYKxXQ1uqp6tH3Ll_vn0NSKiXhyEugqnwyldKBvXkZZ9xi4swhLC210NsIZoxneRj6lHZaI0H-jKHmlrpobgNF-mCHn',
    name: 'Diet Coke Lime Ginger 12-12oz Cans',
    packaging: '12 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000076028',
    imageUrl:
      'https://lh3.googleusercontent.com/inibKMB5kws7xDErz7yOG0MJSIIx4jhpRZL8VGWp3_O-ZsFobPB1_51UQB-i6sONAzkLPDmErP3MdbyGk910UNCL2iUbBOOFN_KxaPAuaQ',
    name: "Dunkin' Donuts Cookies & Cream Iced Coffee Bottle, 13.7 fl oz",
    packaging: '1 Bottle of 13.7OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000076202',
    imageUrl:
      'https://lh3.googleusercontent.com/NnSkxaycL-nKPfEMOGkm8Vr-_Ng3VGcdvHGjS4PV4ioLZMR4goQW-kpE6-3l8mFYHbbdz-BmJxY4a7-amrhORVy6pOrXehpswR11E5w',
    name: 'Coca-Cola Cherry Zero Cans, 7.5 fl oz, 6 Pack',
    packaging: '6 Cans of 7.5OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000076257',
    imageUrl:
      'https://lh3.googleusercontent.com/33b27IyZxbdUIq-zoyltXtkV1MWXOHUoHkBRDSDyvGbSbbebbPMd_CFKOBVptNTme3xUALKYKmjlfiRh7o7A4J3e17mPBS6BxFh_-Bil',
    name: 'Coca-Cola Cherry Can, 12 fl oz',
    packaging: '1 Can of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000077766',
    imageUrl:
      'https://lh3.googleusercontent.com/Cstzha8Z4Vguzm8AxJoDo5dh1NaMuHCEVapiC_57QUwb42V0GRNsP8qgY-sbzXPBxZ9Jkelvq603Modt4k3qNpcxPqkaYIxoqVkYTJPR',
    name: 'POWERADE Zero White Cherry Bottle, 32 fl oz',
    packaging: '1 Bottle of 32.0OZ',
    category: 'ISOTONIC',
  },
  {
    upc: '049000078008',
    imageUrl:
      'https://lh3.googleusercontent.com/eF9__4t3qRn9o7_ldx7JGAEXc_-snUAyql4OjsyHErEhTHDvWx-rH79RwZ3sVVmV6njMJtW05U_CpCJcZc4ytudVS5jBRjtv1yQuLTMz',
    name: "Dunkin' Donuts Mocha Iced Coffee Bottles, 9.4 fl oz, 4 Pack",
    packaging: '4 Bottles of 9.4OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000078015',
    imageUrl:
      'https://lh3.googleusercontent.com/FoqLPMAb3p0gRN9vvTGrT2MWDJFwjlJ6t5A8LhbTWqAfACHk5lDRtUGdgkoMgu0-t5rYvPJm6Aasoy7QCeyBCpqHHhOYdexBVOVT1GM',
    name: "Dunkin' Donuts French Vanilla Iced Coffee Bottles, 9.4 fl oz, 4 Pack",
    packaging: '4 Bottles of 9.4OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000078688',
    imageUrl:
      'https://lh3.googleusercontent.com/6udg2wKTbqnLtHUCoFObv6-kl5Ij0j7tMAotUS1mdZ41EAbhAroNuwuCzW5D4SKP5q9dPzlgQ93oDvYBq0jpG1ZiNg',
    name: 'Diet Coke Strawberry Guava Diet Cola',
    packaging: '8 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000078701',
    imageUrl:
      'https://lh3.googleusercontent.com/2NZdPBG04VjWVb1AbtapBzgRt2Bs5nP_cJ4pQf9rTNpMlBy7acGUH8VAGrDMI6mWNK5lRRiHqjlII7QvdYuOfCU1hdU',
    name: 'Diet Coke Blueberry Acai Diet Soda Soft Drinks, 12 fl oz, 8 Pack',
    packaging: '8 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000078718',
    imageUrl:
      'https://lh3.googleusercontent.com/IiqUsLky4ypAb2X-vLjuqEa8bUoX4Fy2Nv7A1vRBW2a_2aToZlgRMOZIaiyO7ZawSQHgVQZs1h5DtF3Ot-jNUQaCDnVl',
    name: 'Diet Coke Blueberry Acai Diet Cola',
    packaging: '1 Can of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000078725',
    imageUrl:
      'https://lh3.googleusercontent.com/JHZoxxA3xndlI3D_6QVbYCzSIBAkxbQRuB6RdHOBPiR68_UtwB-FtpbWcC-StH2NFANxIKn5WQSx_KK1XMaRdgEOug',
    name: 'Sprite Lymonade Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000078909',
    imageUrl:
      'https://lh3.googleusercontent.com/2H89yprnmGLcT509U8QarUbq98Bfd0316A89ayAHtESZQEl6kr9PeMYVxJ8muBLnF0wTxyZwBcvywpBoTSsPZuJAkwsTCbR1q80Pnmk8',
    name: 'Coca-Cola Orange Vanilla Zero Sugar Fridge Pack Cans, 12 fl oz, 12 Pack',
    packaging: '12 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000078916',
    imageUrl:
      'https://lh3.googleusercontent.com/D5yjJYX3wpg5Xr7WzmOzx3Ttu5CcJ_UldXb8v4G7Z205z8Glg7YH00tO_zQBhpPUaNIU3lfL1zIClZt7VO5J7buIZe3OrZG6-4hSPC_y',
    name: 'Coca-Cola Orange Vanilla Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000078930',
    imageUrl:
      'https://lh3.googleusercontent.com/R8iu0JwVQPOU2JsUXqfHf2RLUZUkvubeXg3_0DGdnbtCJ2kWUsL3hJupPes9f9PkJb6blIfr-euW1rZ0TDkWnbGSvPHlsvjEj4xBLwaL',
    name: 'Coca-Cola Orange Vanilla Fridge Pack Cans, 12 fl oz, 12 Pack',
    packaging: '12 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000078961',
    imageUrl:
      'https://lh3.googleusercontent.com/nZf2BpnjOgmnZys7IwrUisQ57XZP3FDhAjJ0hagp8-1g1eI8xAbPx-bqzY7rMd7vQQyLpD9Wf4kGWottElEm3m-QBR6wL5HWrpQ8Po3K',
    name: 'Coca-Cola Cherry Zero Sugar Can, 12 fl oz',
    packaging: '1 Can of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000079807',
    imageUrl:
      'https://lh3.googleusercontent.com/Z_zFScHbCawTxU1-RoyFe4iIoWEfdgXHjBvRBiNOh3Bh8P_s-Tfto54dNG2leJWLdAa41rOekWEV0Gl6_fffR5kf4jrgu8WAS7IDLc8',
    name: 'Peace Tea Zer-OH Pineapple Groove Can, 23 fl oz',
    packaging: '1 Can of 23.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '049000080193',
    imageUrl:
      'https://lh3.googleusercontent.com/1l8VYYKv5uhODdKVGSbEnWTZCr_QD5OlX1_2nJRat162Xz_xagqOayJZd_G0bKTxw62LNyP0Y23Lv8YRUsa53zQ9qd14IBSWB-g_FmET',
    name: 'Coca-Cola Orange Vanilla Bottles, 16.9 fl oz, 6 Pack',
    packaging: '6 Bottles of 16.9OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000080834',
    imageUrl:
      'https://lh3.googleusercontent.com/9Rdxt9K_Y1XfeLsz3nQ8z1ZRzlSFORqLpLCY7k1wGc1CE3QtVnKukfuf2cAc07uItVmDGSlqK4gG5s6Dyc8vEFctbD9NjUc0YusT4fTs',
    name: 'Sprite Lymonade Fridge Pack Cans, 12 fl oz, 12 Pack',
    packaging: '12 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '049000041217',
    imageUrl:
      'https://lh3.googleusercontent.com/cjla0lnGHpFhHWNnKuDNcusJc28FY7RLQZ1oZYzB_TEc9KTQg4a8Gu-GY6sDX_UfflQIU_an1w0cySk0e1L7AoYRSN-YlQqXY3AqMRqA',
    name: 'Fanta Orange Zero Sugar Fridge Pack Cans, 12 fl oz, 12 Pack',
    packaging: '12 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '786162005076',
    imageUrl:
      'https://lh3.googleusercontent.com/k0AsPmJsfnA6-OVq3gwZH9WTUDZCd5kWS2VgFy-bldiST3Kj6dWbwRleLL6qTUc6I3bq7Lb3YLCDZXZBMK5gb_HbqXbWlKRCwQBOTE2G',
    name: 'smartwater nutrient-enhanced water Bottles, 23.7 fl oz, 15 Pack',
    packaging: '15 Bottles of 23.7OZ',
    category: 'WATER',
  },
  {
    upc: '070847000037',
    imageUrl:
      'https://lh3.googleusercontent.com/-0lEBt9l4n4RX1hWs60tO008BDVXItrRMvtI_NQLPrvTWd4esPj1c95-eoXvEbbmVFCqjM0zrhHJLbgXWCgZ8xIMqu-H-Cm5N1vyZNco',
    name: 'Monster Energy Zero Sugar 16oz Can',
    packaging: '1 Can of 16.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847000051',
    imageUrl:
      'https://lh3.googleusercontent.com/nj5rN6qN8z3Y92BajQIJ0jXFAwjg00YXa6G66lupsPzQ35HiP2zK4hrQZcPVZE9657pA_WXjsthardsgO4CnRlLRf1pIqfEKBRGGWeoRjg',
    name: 'Monster Zero 16oz Can',
    packaging: '1 Can of 16.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847003229',
    imageUrl:
      'https://lh3.googleusercontent.com/-DIJTki9sUTl00xy4y1Gk1H9l4I1F_DyvfyBK_81cZBxCUQZ3qjR1BZ1ATgeLBPSbDpjI3OAIdQ6mZTrBBkM_DGmQOniZG2-c02pkZs-ug',
    name: 'Monster Energy Rehab Lemonade 15.5oz Can',
    packaging: '1 Can of 15.5OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847003342',
    imageUrl:
      'https://lh3.googleusercontent.com/OPW0I1eOBxVAlOLbdjcdeSjUU7DguuFHhMrZVgL15LTsNB_dteJeH9qtndmBE2opFBudmgFCjQ_6c6yjRdu7GR3yYZG286gvAlcIz4hE',
    name: 'Monster Lemonade 16oz Can',
    packaging: '5 Cans of 15.5OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847006145',
    imageUrl:
      'https://lh3.googleusercontent.com/BnspI3_cwLyDA3gM44LRpyQFtmg4e1nlTz8S2WE5vai1pYvTj2d3DChTCcFuvLcZMOHpJf84ROirFMqV_Do-_ycr0qU',
    name: 'Monster Energy Raspberry 16oz Can',
    packaging: '5 Cans of 15.5OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847010463',
    imageUrl:
      'https://lh3.googleusercontent.com/EVAuZwj-AwT45Qs_IeQTREhj0NzCs1KcCG1PGX2dTLsB3Fp-73EjoSe5bUpMmYOaBVi4SgwiDDd-_Vbgf5CZRLL228mMXLxClX7vs68',
    name: 'Monster Digital Tea 16oz Can',
    packaging: '1 Can of 15.5OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847012474',
    imageUrl:
      'https://lh3.googleusercontent.com/I_TeVHnJkssZf7mBdena5X4HsHohrjMbBS3xqXPowG-qcKSV5jgLqIqGEqpQ7Skd3gWW6QINW5aEZwB4ov0pZNgYl0U',
    name: 'Monster Energy Zero Ultra 16oz Can',
    packaging: '1 Can of 16.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847013242',
    imageUrl:
      'https://lh3.googleusercontent.com/ScLlhJ4g3wScvL6-93h5mFjAK01rnKmnb9Om8wS5qpvy-_Sye8ESy1b2yCsK7vskcZ22j6aSJ5k29o7vBmFZ-tekEw',
    name: 'Monster Energy Zero Ultra 4-16oz Cans',
    packaging: '4 Cans of 16.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847016205',
    imageUrl:
      'https://lh3.googleusercontent.com/u75gRtAfc7Lu6OHnOaACNM4fRPIhx38iiEDj4i8NhgfgJ9N6Xi9UCWUGxrHsTuy9OYxtZhKtkTQddwSlK46tdZIaog',
    name: 'Monster Energy Ultra Blue 16oz Can',
    packaging: '1 Can of 16.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847017554',
    imageUrl:
      'https://lh3.googleusercontent.com/5KnLAp5PPSHEX7VM96_NT0xBu-nQysmFJr9-aysBcwxus-K06o3wZOhX2jF8ZbzxOnJlKTeSgJLgXbNitwVEClBsNle8Obb_vc45rz31',
    name: 'Monster Energy Ultra Red 16oz Can',
    packaging: '1 Can of 16.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847017707',
    imageUrl:
      'https://lh3.googleusercontent.com/qpEoDKmvsjZ1f29SodDABdG3aJOqarpmE4JjGbJzknBRHFf0bk67kWFwUa7wJebK-naDD-zULCLBj8w9SJiLlyKcjIXj',
    name: 'Monster Energy Ultra Citrus 24oz Can',
    packaging: '1 Can of 24.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847019206',
    imageUrl:
      'https://lh3.googleusercontent.com/kbhKKPfYrY3Mc0C1DovG86zTFyz9kpF3tntBS9XyWVcbVkcqQqwpRN4bDwcnF29JXCR0Q7Ag65dpnK5Crz_jhQ68-ov-GakAYJpjkpMyLw',
    name: 'Monster Ultra Red Energy 4-16oz Cans',
    packaging: '4 Cans of 16.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847020530',
    imageUrl:
      'https://lh3.googleusercontent.com/NZJVznrj7GfKCQzvrhaL4JLEfF5INssiThuW14l0IeBA1lHss6GJRY3OvQ6MD4kZDxDblx29__O6a2vCIL6lckzdItI0kGyUAjI9goZ5',
    name: 'MONSTER ULTRA BLACK ENERGY DRINK UNFLAVORED ZERO SUGAR CAN 16 FLUID OUNCE ',
    packaging: '1 Can of 16.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847020905',
    imageUrl:
      'https://lh3.googleusercontent.com/H6xKBlBCObgZ-yXPvoV88LJHAAPPQqzoeW7H2hX-Mjn5ab73L3JE4wSbVNsxfYA3bRnO8wLPaH3vL-whgPwuOYjfbOI',
    name: 'Monster Energy Ultra Sunrise 16oz Can',
    packaging: '1 Can of 16.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847021834',
    imageUrl:
      'https://lh3.googleusercontent.com/sI2A5RL0FE1Plj9gUY708dFHZ88HRfz9WytkVCMtojNLbe5en49Uc-nLlos7oy345XiN8xKgrDGR2VWH7QyP3MaHVm4jDAxncWrEoVcaCA',
    name: 'Monster Ultra Sunrise 4-16oz Cans',
    packaging: '4 Cans of 16.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847022909',
    imageUrl:
      'https://lh3.googleusercontent.com/GyHexBIbsv8H2c-a-in9ZE9xVwGnO60_99eGftDEWztDAWbdiGxosWRvEKXj7XN_c2gr9BWuWA-eRakvjO9ayTOwLSsO',
    name: 'Monster Energy Pipeline 16oz Can',
    packaging: '1 Can of 16.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847024026',
    imageUrl:
      'https://lh3.googleusercontent.com/qCTAb_yg4cn-AY8idOaIa56tBOtmeGU4Kkh4SEjLj8vQWOAzPW6PFyR4gAiYe9PYN2kpLW48z2nygm3ELHkahcEShIAg5Mx11F9V-bQ',
    name: 'Java Monster Caramel 15oz Can',
    packaging: '1 Can of 15.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847026679',
    imageUrl:
      'https://lh3.googleusercontent.com/VP3o-wOkbQYtktHM2C4iRWOUrBOmd09_VPjJkaVRyrLNg3XJMkhmrtC58KBKFIm0xQOzaHtRTIIfAFbBXloysXwqsFMK0RLf5zkROFN1',
    name: 'Java Monster Loca Moca 4-11oz Cans',
    packaging: '4 Cans of 11.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847026716',
    imageUrl:
      'https://lh3.googleusercontent.com/PocHnYHb3nr6nik3OnKnor-9OVk9cVpAA2Qemg_5fNRWDgQdU2uZdxI57GBCw4mYWa6biKVzSVddBWGPfMHxs8sYK4IPpv1jh_DZ1p0',
    name: 'Java Monster Coffee Mean Bean 4-11oz Cans',
    packaging: '4 Cans of 11.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847027324',
    imageUrl:
      'https://lh3.googleusercontent.com/Esgilr-WwuLkbjazaWttam9KhYTht-FNCET_xQxZG1ElmN9GC785D59dZK3AMROeSlK4kmLvYi7JP23hENzzMJJthrs',
    name: 'Monster Energy Grape Ultra Violet 16oz Can',
    packaging: '1 Can of 16.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847027973',
    imageUrl:
      'https://lh3.googleusercontent.com/HgLjOrXhGb_3g3D22pmMTgkpeTdEJ2f-tZU82-KRxuSY5TshKE8DU1lqx8tHYgO-P9hEC_yuOOT-Zo9DQ_5oQutN7pM7EQJaFGJ35etK',
    name: 'Monster Fruit Punch 16oz Can',
    packaging: '4 Cans of 16.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847028116',
    imageUrl:
      'https://lh3.googleusercontent.com/-SdgfyM5KKL866KxhIaLCvgG5DSTtSdu3cv-2IIMnMbnZxLMKNkyvnJvaU2wS7Oqa0o9A7w-6L3QqTuEDiu2xZzJu2Hs5A9l8L6tt0Kf',
    name: 'Monster Peach Black 16oz Can',
    packaging: '1 Can of 16.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847029014',
    imageUrl:
      'https://lh3.googleusercontent.com/hZPKE7dWw7exlc_f66iYn1AFxDQAMO1h_WZuaM7CMdPFzm7D0qI-78vbQ_M-TWE0H7IaxufjssWHsmUblRvuCf-1Kw',
    name: 'Monster Energy Mango Loco 16oz Can',
    packaging: '1 Can of 16.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847029243',
    imageUrl:
      'https://lh3.googleusercontent.com/X-dlKwSOVIqcRF5YIl9w_n0cN-6isC8BIC-hnez5KJPvavFpzvXkK0bb2BYlvqx5TmUj7gdiS9xOtiYN-nml1PdLp-YlMYWWSlR5S_ykbw',
    name: 'Monster Espresso Energy Espresso Drink, 8.4 Oz.',
    packaging: '1 Can of 8.4OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847030010',
    imageUrl:
      'https://lh3.googleusercontent.com/WMJ69OxFHlORGn_qP5njC0EPsBAfT3LnSvGIfwEEpot5Hogb4qH6DG3N-BemmsubwIUsKdn1SK8c95vbaYQgIvsyNKUmhUatREUV2y8',
    name: 'Monster Digital 24oz Can',
    packaging: '1 Can of 24.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847030331',
    imageUrl:
      'https://lh3.googleusercontent.com/b-IqzD12NIOasAhYxW-5zvC4yuQMk4EF6fynnBvjwdxv3LDbdKVZ16k48QdPMgLRuLp0sfCrMG3Wlv1Mdzt1nsEHlPWqb9lnoEMMVPw',
    name: 'Monster Protein Shake 15oz Bottle',
    packaging: '1 Bottle of 15.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '070847030546',
    imageUrl:
      'https://lh3.googleusercontent.com/GvPNWJo9t2wd7_O5wodXqoGg1pYXSStBIPP5v8d2rIBIjFU_yrCuTpBgV4XKT4OU6pP7ZKuQpKEGCO0fT85dR4VHYh9wDcGAPlwnOZqn',
    name: 'Monster Energy Ultra Violet 16oz Can',
    packaging: '4 Cans of 16.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847030935',
    imageUrl:
      'https://lh3.googleusercontent.com/-zZQXKIYjChgtWOazHsQPI0zXsoobS1Zfh67QF52jCNTt-6hbk-pV8Lf973L0AJdkHJIDRWFrS2ks-Rj4KpI5C50TosMk8uzA50anvWF',
    name: 'Monster Hydro Apple 25.4oz Bottle',
    packaging: '1 Bottle of 25.4OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847030959',
    imageUrl:
      'https://lh3.googleusercontent.com/NkNbRURtWUvxk6fjdFSJlXrH0orPMgfTHwn18qUWN4XCzxDOqrC6m_lZP3uZQON8dhfYqcPUVgb-WGI1pJwcZfDU3Fnl',
    name: 'Monster Hydro Purple Passion 25.4oz Bottle',
    packaging: '1 Bottle of 25.4OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847031017',
    imageUrl:
      'https://lh3.googleusercontent.com/T2N65XeqQQ9YF_EjQL_YALN_nrdzZAmQifVNcRvLJZ0R2UiVuvh1j38fAYlpE7WwqUf354Pu_XSZ81CA4ERj-j-sy0yq',
    name: 'Monster Zero Berry Citrus 12oz Can',
    packaging: '1 Can of 12.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847031031',
    imageUrl:
      'https://lh3.googleusercontent.com/lTboL2BoJgLJo2d-mjcXIhG0mGuXVNJD1pHFt_AKTkI3SyWRAOOW_7r6ASW1VoDy7UvQ1jw0QP1UrqVh4tLYJjZjUw',
    name: 'Monster Digital Mango 12oz Can',
    packaging: '1 Can of 12.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847031116',
    imageUrl:
      'https://lh3.googleusercontent.com/YxWYtzAqZDZFAxOUrpzTjcduKycc1t_55pmtDIVNpsHktArtqUxtCMQbhniQAhIXtrFu7NTYgt3ubiJ0YVgtdudcGVH3Dwa-nTUxjekG',
    name: 'Monster Dragon Tea White 16oz Can',
    packaging: '1 Can of 16.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847031918',
    imageUrl:
      'https://lh3.googleusercontent.com/8yLQa3ECb8i8hWhIc-FWGY8pHXKZykF_x8RM40KecjMjCXjyABfFsCuKzVcwGbmdhun4zUxJWT7EgRNZeDvg1wY9yzM',
    name: 'Monster Juice Pacific Punch 16oz Can',
    packaging: '1 Can of 16.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847032953',
    imageUrl:
      'https://lh3.googleusercontent.com/0cYMivjKPT8xKoLGl1_QB4ELX-hcSQtCJYqUeNC7eSRWZdfvd4aCqQNn48oMYn4p7G3cTOOQw5IgAUStHuY1yldV64bGoUdc7AensBux',
    name: 'MONSTER HYDRO ENERGY DRINK MEAN GREEN BOTTLE 25.4 FLUID OUNCE ',
    packaging: '1 Bottle of 25.4OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847032977',
    imageUrl:
      'https://lh3.googleusercontent.com/Cumzjv4XFemhZmbyRw8oDNPvDcr8s7K5063IIlFK-2aQ-JMrYC92-BOEL_oL6CkBWsWVPMcNJgtVEbZ86tp_l6xbj60gAtFXE_0YosIY',
    name: 'Monster Hydro Melon 25.4oz Bottle',
    packaging: '1 Bottle of 25.4OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847032991',
    imageUrl:
      'https://lh3.googleusercontent.com/HX4SfAPq9mLcD3k9huszkCX8CVYl-GfUPN5eMOsLNl2B9qTtIe9Fv2y29ZyTcR9_IgDsuVDBMRerALUXg_YkLZlZnhCkT9oyASrvhd1z',
    name: 'Monster Green Tea 16oz Can',
    packaging: '1 Can of 16.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847033080',
    imageUrl:
      'https://lh3.googleusercontent.com/DZr3ijogfO_FUhSlrM_xZV35QuKrC5n1nQ7ERLx7YSt_k5ZCiJ6Vivgd_HkK3DRS7VyxSjBFSJnXDpgku8Pg_jAMrg',
    name: 'Monster Energy Ultra Paradise 16oz Can',
    packaging: '1 Can of 16.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847033103',
    imageUrl:
      'https://lh3.googleusercontent.com/5_TwphCxBcZan-TXfGN9ddW1c7o-cZk6mX50M2cPDLsZ2Ho_Ob2sgpfePgYj-CrwKbP0ajniJavdr8BD15X282vy5wnh1roVG8Z67kXD',
    name: 'Monster Energy Chocolate 15oz Can',
    packaging: '1 Can of 15.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847033516',
    imageUrl:
      'https://lh3.googleusercontent.com/8qPAo2ts715WOsfpjjMiVRnf0t_Z-wz3K-WR9WXnxisE4gUBfbR7tVdM4RTVk2Ordbpp-4ri5ZeP5XDu2vcEZWMJgNYxId2Cp84hQaDJHA',
    name: 'Monster Energy Dragon Tea 5-15.5oz Cans',
    packaging: '1 Can of 15.5OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847811176',
    imageUrl:
      'https://lh3.googleusercontent.com/0W9Ojy5e6me05xiYPjIUMb359ouddpFlrel8pptFzCAyHWb61s2x8UGsfm_2a45f_yDdL54JdaybnSkMji8RNP9Gk5X6jOadU3YuwwTPSA',
    name: 'Monster Energy Original 4-16oz Cans',
    packaging: '4 Cans of 16.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847811213',
    imageUrl:
      'https://lh3.googleusercontent.com/4wjLSu-1mehsKyi1b5ZcwxP1F5TmfhdNZDv_LnTizHei81ob_V-0zJLjLTtGA363M7O9oflG6FHyjvT6Opy38YWP5g',
    name: 'Monster Lo-carb 24oz Can',
    packaging: '1 Can of 24.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847811244',
    imageUrl:
      'https://lh3.googleusercontent.com/x1fXurRopeNkiVpANe6JSqlDkL48MFJe7gxZzJUg32ufn4bNn9vjYYUPtpQ9zUf06w4oRKt3oW4GF6cg0Szoh8W4VQ',
    name: 'Monster 24oz Can',
    packaging: '1 Can of 24.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847811268',
    imageUrl:
      'https://lh3.googleusercontent.com/u9JEZmSuyl4dCMZ79g3CBND1_dqfLUuB6EW6nx6kV4iEwqAzOkATN1ThmKpzvXK5FFZmOkXYj8kzKValPJ5QiUzlPRJv',
    name: 'Monster Energy Lo-carb 16oz Can',
    packaging: '1 Can of 16.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847811299',
    imageUrl:
      'https://lh3.googleusercontent.com/999l-t6alXmlVHALnmaPVXpi_Kn2I4RVdgDdcaVerPVHXJloTA5vRnKguClaXHW1sNGhiH5vLkeRErbAl0kIXAvkZ-et0kwLFp2U3-k',
    name: 'Monster Energy Lo-carb 4-16oz Cans',
    packaging: '4 Cans of 16.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847811701',
    imageUrl:
      'https://lh3.googleusercontent.com/cHFaXZlI98pFrUnaa0bFF8P3pDYBqk9rNcgVP3shKWiR_v4k8eQo9-C-uoUR7oaGpJgzwHpucYqweEnA5idfh-d8FZG9sjLZxQoJ-zoH',
    name: 'Monster Energy 5-16oz Cans',
    packaging: '5 Cans of 16.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847812517',
    imageUrl:
      'https://lh3.googleusercontent.com/ewtVJUX8pDuj4Iw-ceiHQoYm-TTV7C5wrLyWITu00wvKA7aTZssu1Fq8rc9_x7Gv-ouy87LlyMIgDNgAxu4kon3F_ZPoFhUNo05PaRs',
    name: 'Monster Coffee 15oz Can',
    packaging: '1 Can of 15.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847812609',
    imageUrl:
      'https://lh3.googleusercontent.com/Esy0p17L5LY2KWis-G5V98iy-ganNBxNTTLX8HnMExXYMhrXhPR1TqMkkNq17luw9kP8pVC7mjvhsKE1wnjjP5O7zDCA',
    name: 'Java Monster Mean Bean 15oz Can',
    packaging: '1 Can of 15.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847812807',
    imageUrl:
      'https://lh3.googleusercontent.com/MrCrLZWzCHCS86FQJy-EUvHBiNRGR72fjv9uf1P4cIWBwZh-lSqFErWY_JmTbWCgm2Bzpua0vsPGNQL1F96hA-KAprVAjKsL1vMA_aKh',
    name: 'Monster Energy Coffee 15oz Can',
    packaging: '1 Can of 15.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847813101',
    imageUrl:
      'https://lh3.googleusercontent.com/lZ6lPfPtrB8uuMS81SV8wbiAeliFAzWXXRAEV7akwkSCQjdc-pkVFqDvQg-6mUpTUwiSMpHjFVStDo0FMnSGcEzai7CgahQ_8z--MKU3',
    name: 'Monster Digital Vanilla Coffee Energy 15oz Can',
    packaging: '1 Can of 15.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '070847814047',
    imageUrl:
      'https://lh3.googleusercontent.com/ZgnWKod5G0lmISWFTnDFtt2wq9y-wDJHJN5YL359CVhCtdXRk1TWx8bqkbZJLgvaV7wLb-UiPDGzy4Ke2v8WaWzD81Ov',
    name: 'MONSTER ENERGY MAXX SUPER DRY CAN 12 FLUID OUNCE ',
    packaging: '1 Can of 12.0OZ',
    category: 'ENERGY',
  },
  {
    upc: '078000011623',
    imageUrl:
      'https://lh3.googleusercontent.com/Ku8VDmDyQ5V8Vtfu-PnwqCMiiP529_tGtzN1ffqyGhoWmgtzm3-HJCS0jVpB3CH03uNVM9MpkOs_AWOknPBFpDd8MgRGHGE0sxUTgoM',
    name: 'Cactus Cooler Orange Pineapple 12-12oz Cans',
    packaging: '12 Cans of 12.0OZ',
    category: 'SPARKLING',
  },
  {
    upc: '080793808496',
    imageUrl:
      'https://lh3.googleusercontent.com/zT9bi_hIuZjZ7T8UN6HCQ4UO_ItRgh-9C-SBeWGHb-JutqP4rGT-KUrY_W-TYXr3TMS-Wx9TUV0JZF5ZNNBOSLyU0ZdTiVQIbEq0-Ju5',
    name: 'Fuze Iced Tea Lemon Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '083900005542',
    imageUrl:
      'https://lh3.googleusercontent.com/heVd36W91QpaA2kelyFq_uGqttUEiYMeUSlHq31mO1KIk1GFuqhP9KrIruvPy_ysogRvCZuVo-yNHGIFt41E9aHBS_UAbct-DFG0cEkg',
    name: 'Gold Peak Sweetened Black Tea Bottles, 16.9 fl oz, 6 Pack',
    packaging: '6 Bottles of 16.9OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '083900005757',
    imageUrl:
      'https://lh3.googleusercontent.com/1DYz7NqOXb_U7yh9pc_j-v51239KMF2PWaNngRu72YZ5KLzKGaf3myhLDc-yJVsnRzflGLToeMaiW9fDIYtn96QZe1sZnAW6SSRHc3Ms',
    name: 'Gold Peak Sweetened Black Tea Bottle, 18.5 fl oz',
    packaging: '1 Bottle of 18.5OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '083900005764',
    imageUrl:
      'https://lh3.googleusercontent.com/1FxwNdBFI_VSYRQD57HpBc1Gz_sngp0jbRisouHG_4CerkSRhnMuwoHmIofYAavbkk1wczadGGfWHcO8u03Dfi3qw0JrYI8cica9AUE',
    name: 'Gold Peak Diet Tea Bottle, 18.5 fl oz',
    packaging: '1 Bottle of 18.5OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '083900005771',
    imageUrl:
      'https://lh3.googleusercontent.com/CBsccN7Ybn4c4mbCZqqwNHVLlFWPjUnPohRRfSZp9tucyoiQc5vBO8vhF-IVDwREL2GeSqNoLMHDufOD6SRxSpH-Kh1IxX65lZhjapw',
    name: 'Gold Peak Unsweetened Black Tea Bottle, 18.5 fl oz',
    packaging: '1 Bottle of 18.5OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '083900005979',
    imageUrl:
      'https://lh3.googleusercontent.com/xSqHmXrHwsM2wmAZfoJuEMS7pi_oHsoZPe3Z9uBQdcdsUhMm-X4_BSZvOUVo85SmsDFKIcL70-JaKKVFYfXAI46FYfSM84HIqzzrCi-X',
    name: 'Gold Peak Green Tea Bottle, 18.5 fl oz',
    packaging: '1 Bottle of 18.5OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '657622114754',
    imageUrl:
      'https://lh3.googleusercontent.com/KObptYUurEt0eJJznGUknxoaV4jneBDZ0hOCIRbsZEGKtShkAiLOZt1qqyIIUcl2pTruOErbHq08kL2_rBOXvrmGb6c',
    name: 'Honest Tea Variety Pack Bottles, 16.9 fl oz, 12 Pack',
    packaging: '12 Bottles of 16.9OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '657622222015',
    imageUrl:
      'https://lh3.googleusercontent.com/H8cudmP8z3Lc9FkJgXBGqwoYqjPk08oKqFGm1ONDPvkxI16RLzoN83HDfIf7ZWNgRK0CrNt14wPi5JI_6JmmtRlkRDNdX6RYVu2Bat8',
    name: 'Honest Tea Honey Green Bottle, 16.9 fl oz',
    packaging: '1 Bottle of 16.9OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '657622531551',
    imageUrl:
      'https://lh3.googleusercontent.com/oPmTHesr_TjFujf1W4fSBOwxBKynhCmqP5QZkGwMSAgjKNhtxBQlicU97-Q4shPfCVlr5OnQ2z40KJF63zP5n0IHKHZn5pXkYIDYCjU',
    name: 'Honest Tea Half Tea & Half Lemonade Bottle, 16.9 fl oz',
    packaging: '1 Bottle of 16.9OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '786162001511',
    imageUrl:
      'https://lh3.googleusercontent.com/2sJakwPPyw2mCvuegLIz7o4Dvi-9LVit6umgCyVVWU63jlGr2_ePxH-tCZReEBMX0Wul7YxasTYjaEn_bzLa4i0Jur7_4Mp9zRpqGqcR',
    name: 'smartwater nutrient-enhanced water Bottle, 23.7 fl oz',
    packaging: '1 Bottle of 700.0ml',
    category: 'WATER',
  },
  {
    upc: '786162002815',
    imageUrl:
      'https://lh3.googleusercontent.com/O2JNS_5W9mTgDz30nSXoMcdKUP6QrrrCILUsMVftK8bS1VIqPjO-rixKoUB8MV0XWckMzWZB2unIYwVUOfACIzgsB6JHRIFavkh9VCSsxA',
    name: 'smartwater nutrient-enhanced water Bottles, 33.8 fl oz, 6 Pack',
    packaging: '6 Bottles of 1.0L',
    category: 'WATER',
  },
  {
    upc: '786162002969',
    imageUrl:
      'https://lh3.googleusercontent.com/u4_mLVIo3-zM6vLpqTIDBfnFWdDYTcRZxl1jeAmZHmOFWbdHESDhqh6G1vlkAz1Io4qKyQdsPwuP5-Oo7nPRVWlsXLqcF9Oh80NxsWg',
    name: 'vitaminwater zero sugar xxx Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '786162002976',
    imageUrl:
      'https://lh3.googleusercontent.com/v-nlA5tXi7RmbFqt08v9ZKenlXbM8qmjdJC_rqtxJVxPvZEP_Mmmtc0IaESL8Gzf3snXHsy5oGe4NY3oDI4VvwdfUUdNFjMYEZ-NSe7h',
    name: 'vitaminwater zero sugar squeezed Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '786162002983',
    imageUrl:
      'https://lh3.googleusercontent.com/dyJ0O3V0O6tmSTTrK1NLHjTlUgGM0tvNmZq69GLtTCE727VVv9wWIeVXgKjXWYnoMa1AIV-c9vDmiedYMjTF4vmza70-RHK45I3qUmjcaw',
    name: 'vitaminwater zero sugar rise Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '786162003027',
    imageUrl:
      'https://lh3.googleusercontent.com/FTfSpYt82v28v00CI0iMP4GhiT_3eoD5b-nMMiJxrYEvZiN5feF5_Hv-T23U5k5Uf1hqEAsL8OvFyEz1_rWUHPHhaxmv9UY5gi7GYllcfg',
    name: 'vitaminwater zero sugar go-go Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '786162003508',
    imageUrl:
      'https://lh3.googleusercontent.com/vt5evUf9Spxqt0Llu7m-kY4MFXH-Ergj1AICTfZA94A3JcSMxgrvZjMgVFnbgaFJM2mFGpbI6tKDL1nvwJNmbnEp26kecaD-YHcyJJ4a',
    name: 'vitaminwater zero sugar squeezed Bottles, 16.9 fl oz, 6 Pack',
    packaging: '6 Bottles of 16.9OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '786162003515',
    imageUrl:
      'https://lh3.googleusercontent.com/4SZTR0nFZ_TR9pDCajFDk-623LJp99H65fRmjp3n9Gwm5QXMZa10b-vjFctGu3Jcacffwutd7vyB38JwonwUGwQj8KE',
    name: 'vitaminwater zero sugar xxx Bottles, 16.9 fl oz, 6 Pack',
    packaging: '6 Bottles of 16.9OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '786162003522',
    imageUrl:
      'https://lh3.googleusercontent.com/2bZFKaHl4uMHlZpJQaoG2xr6xfNiNxc8rKhSxvy2kBll5PY6wU05riAAFUgATiQNKRcPBB1B6rYut_9HdrlbZRQP3akGvP79eQ4rM0Vglw',
    name: 'vitaminwater zero sugar rise Bottles, 16.9 fl oz, 6 Pack',
    packaging: '6 Bottles of 16.9OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '786162003546',
    imageUrl:
      'https://lh3.googleusercontent.com/_FCF9YsX10tip92NM2ZFTD0fgTbC1oKZwvgoC7vPeXhS0iDAAY5yi0FOMORC6BexelTBPDnMtdhthQQrtGSxWmE3nFidNuYiyTweUktt',
    name: 'vitaminwater XXX, açai-blueberry-pomegranate Bottles, 16.9 fl oz, 6 Pack',
    packaging: '6 Bottles of 16.9OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '786162003553',
    imageUrl:
      'https://lh3.googleusercontent.com/IZ_qtOPVlVVXcgmnWutDnOtkQ_CIPFzDoKRhKJgE3vFvM8wI3853PDGxYiVPbqN-Kb0s4MstIkt2l1wukVW9SIaB90Z3nlewgORIAudq',
    name: 'vitaminwater power-c, dragonfruit Bottles, 16.9 fl oz, 6 Pack',
    packaging: '6 Bottles of 16.9OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '786162003690',
    imageUrl:
      'https://lh3.googleusercontent.com/5L0NLVQKychnJ4MHU2vNdgy6GqLetERedhG_81FPP_jtdLCqpxinBKCjTOknUjBbYljL9axLb1kJEM1ryDx1XYQwC0KWl7Badwobrv9V',
    name: 'smartwater nutrient-enhanced water Bottles, 16.9 fl oz, 6 Pack',
    packaging: '6 Bottles of 16.9OZ',
    category: 'WATER',
  },
  {
    upc: '786162003737',
    imageUrl:
      'https://lh3.googleusercontent.com/VYBwEBi-i_1Kd0Xjvy9xMVGGDQS9d6DK_zNlWp8yfkVNQbYaVQFdb9tkE5SEGtFfr6oZw65bPpco-kwyqwZgPRMuO-WeH_LiPWI6aVx_',
    name: 'vitaminwater zero sugar power c Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '786162003744',
    imageUrl:
      'https://lh3.googleusercontent.com/ygtTIHV2BnjHdSFC5zSpBCpC4WjNWiocc3aQY5ftPq-M5Xa7zJL3V4my4MPquON0ZbaE9vy8Nz7w4giSZjDThn7E5XNQIFohHlltDKQ',
    name: 'vitaminwater zero sugar revive Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '786162004857',
    imageUrl:
      'https://lh3.googleusercontent.com/OTfBawfRNbG2mNcmJE949tao5S74j4rcuvwZBiH5LoWDGKKVXAhZ75XqHQrzuj1g20dEx_ANbeVy2Hd6sECcHbaZrDCVQhtMGSRdmy7e',
    name: 'vitaminwater refresh Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '786162004925',
    imageUrl:
      'https://lh3.googleusercontent.com/jwm1tHUJbFGWuqvzZ3MHYJZs98wOIjfINTURpbXvI70jhjxDImO3MyFA-PoGqZ6_unA6Q0Wq7bpJrvO_maWQ2Ecto5pfR6WeQnarMefE',
    name: 'vitaminwater refresh Bottle, 32 fl oz',
    packaging: '1 Bottle of 32.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '786162004987',
    imageUrl:
      'https://lh3.googleusercontent.com/BodtN1OEpGksTO__otE5SjQcIus9fTmVyZe46M4lDFRUB8yINYF_1DwXuHjC1ZlqrM-ObtAQpjx_AbOEPcgELbGk_mH0kuXwtH2ufwc',
    name: 'vitaminwater zero sugar shine Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '786162005120',
    imageUrl:
      'https://lh3.googleusercontent.com/yaJpbQUW4BXX7jPxx_xb89wPjXvmalAl9WECznPlUaj0MwMGo4V4tkkx3BIvsVKalMUJ16oHWYnC_r46wUKwNP8Dc-7taJziDtSYdTC7hw',
    name: 'vitaminwater zero sugar reset Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '786162005144',
    imageUrl:
      'https://lh3.googleusercontent.com/cbZAaMjiCLNTa9wu0-BmKL17EkLkBM5Xx1c4xHAL72c1nrUI_FBcuyYnq2eX4Zu4ATIDhRLb8nN1gjLsJkrz7TyFBN1fo1zKZsDIvVU',
    name: 'smartwater nutrient-enhanced water Bottles, 23.7 fl oz, 6 Pack',
    packaging: '1 Bottle of 23.7OZ',
    category: 'WATER',
  },
  {
    upc: '786162005311',
    imageUrl:
      'https://lh3.googleusercontent.com/aoVyw9OnFG1UAlKPEvzRd-GlG3oBnV51MyaZTOhghFJtTdNhNyEMk9tSWrJ6oQ8vwqwqXGLn_dlJ7flonMjyVdCBpuVF',
    name: 'Glaceau VWTR Zero Sugar Ice-KO Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '786162005335',
    imageUrl:
      'https://lh3.googleusercontent.com/845r8Z0j2v8BI5gM9Wal3EsA6MQhmGIjxQlPjx60tzoSFEy0xUBWpi8uvbjr20vPydnIesGTTeccUkcJjfQuSQWcabi6',
    name: 'smartwater alkaline Bottle, 33.8 fl oz',
    packaging: '1 Bottle of 1.0L',
    category: 'WATER',
  },
  {
    upc: '786162005342',
    imageUrl:
      'https://lh3.googleusercontent.com/_PbOcWCSkFvqJN2XAgJ_vhxxrDXNKvkR8dyUT2B-Hx2cBv9hgWW5hHJhSuLG1Jn_HclgyNtCqAplcB1vD25hZxI858vcWpYD3GGRuHQ',
    name: 'smartwater antioxidant Bottle, 33.8 fl oz',
    packaging: '1 Bottle of 33.8OZ',
    category: 'WATER',
  },
  {
    upc: '786162010001',
    imageUrl:
      'https://lh3.googleusercontent.com/Ixhg9gOYv86oYiPR_Jy3Q1oyaT8cgLZiNwL3BjeLKbHrJLezgZGJ3LpbOLQG6dCs-DuwGrDYZOED-2gOXq5YqjFU8C3309HHb0J3i20',
    name: 'vitaminwater power-c, dragonfruit Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '786162010322',
    imageUrl:
      'https://lh3.googleusercontent.com/DDOaFioUPGEx9WDeNXnYfSZAnJMdiVuWkaxfjFKfQoihUptJ-Y-KtwGXty9-Vl2H0zaMTs8gHOMNAU7YjrNStt871wmnIsE5wCZNiWsG',
    name: 'vitaminwater power-c, dragonfruit Bottle, 32 fl oz',
    packaging: '1 Bottle of 32.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '786162040008',
    imageUrl:
      'https://lh3.googleusercontent.com/pxHBgcmgUQjII3CIibgLJSsoiUBK1a6qYR2ex4e93gpxQbUnSqPMoTLOgFiKT9LWTyVglvIGB5KWo6Xrve-EH0PaDww',
    name: 'vitaminwater essential, orange-orange Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '786162070005',
    imageUrl:
      'https://lh3.googleusercontent.com/MuNAf0-pfx_eCx8KRiochEhY7sz0xYcJ7bcWTqiqcSJyZGoBdSMGJ3__g-1NycUe-nvTsuATVSpkK_rYMcHxUH7F5FgV',
    name: 'vitaminwater focus Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '786162080004',
    imageUrl:
      'https://lh3.googleusercontent.com/3mqXFkTGCc89WNX_CgsDL4voufQsHGY_3YXaR4A6DuviNq45FzkgFBmJJwXW6Oj59ygEmHLQ2p0MjasDqaI9_P88uezAdFm1AuVt0DyX',
    name: 'vitaminwater energy, tropical citrus Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '786162080325',
    imageUrl:
      'https://lh3.googleusercontent.com/gSqy7jPgSv1FyFI4MHCq-wPHr4r8d-EmVTtprmLdRLiMrEQnctpxu11ZAjsoWfgPsz1pvGKPgSV5Qp7_JnGXlVDakXb4lITQXOgzk94J',
    name: 'vitaminwater energy, tropical citrus Bottle, 32 fl oz',
    packaging: '1 Bottle of 32.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '786162110008',
    imageUrl:
      'https://lh3.googleusercontent.com/lGF8_sCb0i75-NuT7BRCpMUOvY-qgKZEsYMz5blmKv3YRGJSHUz6jPUXcW2oQQ4B-w8C-2sOhFdlLlYBccsmQUtL7sOEdodncxDHUSVB',
    name: 'vitaminwater revive, fruit punch Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'REJUVENATE',
  },
  {
    upc: '786162200433',
    imageUrl:
      'https://lh3.googleusercontent.com/aMhYNudnSbbhQeN4GdmdKuQ5CpHgjmOvoSE91oXrcJnYraThazeca006Vglu8W_xUG4EZ_eaJQxc4byCAyhtlYnPZd2N_OganFITNelZ',
    name: 'smartwater nutrient-enhanced water Bottle, 20 fl oz',
    packaging: '1 Bottle of 20.0OZ',
    category: 'WATER',
  },
]
