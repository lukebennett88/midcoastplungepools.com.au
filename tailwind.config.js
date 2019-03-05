/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.


|-------------------------------------------------------------------------------
| The default config
|-------------------------------------------------------------------------------
|
| This variable contains the default Tailwind config. You don't have
| to use it, but it can sometimes be helpful to have available. For
| example, you may choose to merge your custom configuration
| values with some of the Tailwind defaults.
|
*/

const defaultConfig = require('tailwindcss/defaultConfig')();

/*
|-------------------------------------------------------------------------------
| Colors                                    https://tailwindcss.com/docs/colors
|-------------------------------------------------------------------------------
|
| Here you can specify the colors used in your project. To get you started,
| we've provided a generous palette of great looking colors that are perfect
| for prototyping, but don't hesitate to change them for your project. You
| own these colors, nothing will break if you change everything about them.
|
| We've used literal color names ("red", "blue", etc.) for the default
| palette, but if you'd rather use functional names like "primary" and
| "secondary", or even a numeric scale like "100" and "200", go for it.
|
*/

const colors = {
  transparent: 'transparent',
  white: '#ffffff',
  black: '#22292f',

  // red
  'red-050': '#FFEEEE',
  'red-100': '#FACDCD',
  'red-200': '#F29B9B',
  'red-300': '#E66A6A',
  'red-400': '#D64545',
  'red-500': '#BA2525',
  'red-600': '#A61B1B',
  'red-700': '#911111',
  'red-800': '#780A0A',
  'red-900': '#610404',

  // red vivid
  'red-vivid-050': '#FFE3E3',
  'red-vivid-100': '#FFBDBD',
  'red-vivid-200': '#FF9B9B',
  'red-vivid-300': '#F86A6A',
  'red-vivid-400': '#EF4E4E',
  'red-vivid-500': '#E12D39',
  'red-vivid-600': '#CF1124',
  'red-vivid-700': '#AB091E',
  'red-vivid-800': '#8A041A',
  'red-vivid-900': '#610316',

  // orange
  'orange-050': '#FFEFE6',
  'orange-100': '#FFD3BA',
  'orange-200': '#FAB38B',
  'orange-300': '#EF8E58',
  'orange-400': '#E67635',
  'orange-500': '#C65D21',
  'orange-600': '#AB4E19',
  'orange-700': '#8C3D10',
  'orange-800': '#77340D',
  'orange-900': '#572508',

  // orange vivid
  'orange-vivid-050': '#FFE8D9',
  'orange-vivid-100': '#FFD0B5',
  'orange-vivid-200': '#FFB088',
  'orange-vivid-300': '#FF9466',
  'orange-vivid-400': '#F9703E',
  'orange-vivid-500': '#F35627',
  'orange-vivid-600': '#DE3A11',
  'orange-vivid-700': '#C52707',
  'orange-vivid-800': '#AD1D07',
  'orange-vivid-900': '#841003',

  // yellow
  'yellow-050': '#FFFAEB',
  'yellow-100': '#FCEFC7',
  'yellow-200': '#F8E3A3',
  'yellow-300': '#F9DA8B',
  'yellow-400': '#F7D070',
  'yellow-500': '#E9B949',
  'yellow-600': '#C99A2E',
  'yellow-700': '#A27C1A',
  'yellow-800': '#7C5E10',
  'yellow-900': '#513C06',

  // yellow vivid
  'yellow-vivid-050': '#FFFBEA',
  'yellow-vivid-100': '#FFF3C4',
  'yellow-vivid-200': '#FCE588',
  'yellow-vivid-300': '#FADB5F',
  'yellow-vivid-400': '#F7C948',
  'yellow-vivid-500': '#F0B429',
  'yellow-vivid-600': '#DE911D',
  'yellow-vivid-700': '#CB6E17',
  'yellow-vivid-800': '#B44D12',
  'yellow-vivid-900': '#8D2B0B',

  // lime green
  'lime-green-050': '#F2FDE0',
  'lime-green-100': '#E2F7C2',
  'lime-green-200': '#C7EA8F',
  'lime-green-300': '#ABDB5E',
  'lime-green-400': '#94C843',
  'lime-green-500': '#7BB026',
  'lime-green-600': '#63921A',
  'lime-green-700': '#507712',
  'lime-green-800': '#42600C',
  'lime-green-900': '#2B4005',

  // lime green vivid
  'lime-green-vivid-050': '#F8FFED',
  'lime-green-vivid-100': '#E6FFBF',
  'lime-green-vivid-200': '#CAFF84',
  'lime-green-vivid-300': '#AFF75C',
  'lime-green-vivid-400': '#8DED2D',
  'lime-green-vivid-500': '#6CD410',
  'lime-green-vivid-600': '#5CB70B',
  'lime-green-vivid-700': '#399709',
  'lime-green-vivid-800': '#2E7B06',
  'lime-green-vivid-900': '#1E5303',

  // green
  'green-050': '#E3F9E5',
  'green-100': '#C1EAC5',
  'green-200': '#A3D9A5',
  'green-300': '#7BC47F',
  'green-400': '#57AE5B',
  'green-500': '#3F9142',
  'green-600': '#2F8132',
  'green-700': '#207227',
  'green-800': '#0E5814',
  'green-900': '#05400A',

  // green vivid
  'green-vivid-050': '#E3F9E5',
  'green-vivid-100': '#C1F2C7',
  'green-vivid-200': '#91E697',
  'green-vivid-300': '#51CA58',
  'green-vivid-400': '#31B237',
  'green-vivid-500': '#18981D',
  'green-vivid-600': '#0F8613',
  'green-vivid-700': '#0E7817',
  'green-vivid-800': '#07600E',
  'green-vivid-900': '#014807',

  // teal
  'teal-050': '#EFFCF6',
  'teal-100': '#C6F7E2',
  'teal-200': '#8EEDC7',
  'teal-300': '#65D6AD',
  'teal-400': '#3EBD93',
  'teal-500': '#27AB83',
  'teal-600': '#199473',
  'teal-700': '#147D64',
  'teal-800': '#0C6B58',
  'teal-900': '#014D40',

  // teal vivid
  'teal-vivid-050': '#F0FCF9',
  'teal-vivid-100': '#C6F7E9',
  'teal-vivid-200': '#8EEDD1',
  'teal-vivid-300': '#5FE3C0',
  'teal-vivid-400': '#2DCCA7',
  'teal-vivid-500': '#17B897',
  'teal-vivid-600': '#079A82',
  'teal-vivid-700': '#048271',
  'teal-vivid-800': '#016457',
  'teal-vivid-900': '#004440',

  // cyan
  'cyan-050': '#E0FCFF',
  'cyan-100': '#BEF8FD',
  'cyan-200': '#87EAF2',
  'cyan-300': '#54D1DB',
  'cyan-400': '#38BEC9',
  'cyan-500': '#2CB1BC',
  'cyan-600': '#14919B',
  'cyan-700': '#0E7C86',
  'cyan-800': '#0A6C74',
  'cyan-900': '#044E54',

  // cyan vivid
  'cyan-vivid-050': '#E1FCF8',
  'cyan-vivid-100': '#C1FEF6',
  'cyan-vivid-200': '#92FDF2',
  'cyan-vivid-300': '#62F4EB',
  'cyan-vivid-400': '#3AE7E1',
  'cyan-vivid-500': '#1CD4D4',
  'cyan-vivid-600': '#0FB5BA',
  'cyan-vivid-700': '#099AA4',
  'cyan-vivid-800': '#07818F',
  'cyan-vivid-900': '#05606E',

  // light blue
  'light-blue-050': '#EBF8FF',
  'light-blue-100': '#D1EEFC',
  'light-blue-200': '#A7D8F0',
  'light-blue-300': '#7CC1E4',
  'light-blue-400': '#55AAD4',
  'light-blue-500': '#3994C1',
  'light-blue-600': '#2D83AE',
  'light-blue-700': '#1D6F98',
  'light-blue-800': '#166086',
  'light-blue-900': '#0B4F71',

  // light blue vivid
  'light-blue-vivid-050': '#E3F8FF',
  'light-blue-vivid-100': '#B3ECFF',
  'light-blue-vivid-200': '#81DEFD',
  'light-blue-vivid-300': '#5ED0FA',
  'light-blue-vivid-400': '#40C3F7',
  'light-blue-vivid-500': '#2BB0ED',
  'light-blue-vivid-600': '#1992D4',
  'light-blue-vivid-700': '#127FBF',
  'light-blue-vivid-800': '#0B69A3',
  'light-blue-vivid-900': '#035388',

  // blue
  'blue-050': '#DCEEFB',
  'blue-100': '#B6E0FE',
  'blue-200': '#84C5F4',
  'blue-300': '#62B0E8',
  'blue-400': '#4098D7',
  'blue-500': '#2680C2',
  'blue-600': '#186FAF',
  'blue-700': '#0F609B',
  'blue-800': '#0A558C',
  'blue-900': '#003E6B',

  // blue vivid
  'blue-vivid-050': '#E6F6FF',
  'blue-vivid-100': '#BAE3FF',
  'blue-vivid-200': '#7CC4FA',
  'blue-vivid-300': '#47A3F3',
  'blue-vivid-400': '#2186EB',
  'blue-vivid-500': '#0967D2',
  'blue-vivid-600': '#0552B5',
  'blue-vivid-700': '#03449E',
  'blue-vivid-800': '#01337D',
  'blue-vivid-900': '#002159',

  // indigo
  'indigo-050': '#E0E8F9',
  'indigo-100': '#BED0F7',
  'indigo-200': '#98AEEB',
  'indigo-300': '#7B93DB',
  'indigo-400': '#647ACB',
  'indigo-500': '#4C63B6',
  'indigo-600': '#4055A8',
  'indigo-700': '#35469C',
  'indigo-800': '#2D3A8C',
  'indigo-900': '#19216C',

  // indigo vivid
  'indigo-vivid-050': '#D9E8FF',
  'indigo-vivid-100': '#B0D0FF',
  'indigo-vivid-200': '#88B1FC',
  'indigo-vivid-300': '#5E8AEE',
  'indigo-vivid-400': '#3A66DB',
  'indigo-vivid-500': '#2251CC',
  'indigo-vivid-600': '#1D3DBF',
  'indigo-vivid-700': '#132DAD',
  'indigo-vivid-800': '#0B1D96',
  'indigo-vivid-900': '#061178',

  // purple
  'purple-050': '#EAE2F8',
  'purple-100': '#CFBCF2',
  'purple-200': '#A081D9',
  'purple-300': '#8662C7',
  'purple-400': '#724BB7',
  'purple-500': '#653CAD',
  'purple-600': '#51279B',
  'purple-700': '#421987',
  'purple-800': '#34126F',
  'purple-900': '#240754',

  // purple vivid
  'purple-vivid-050': '#F2EBFE',
  'purple-vivid-100': '#DAC4FF',
  'purple-vivid-200': '#B990FF',
  'purple-vivid-300': '#A368FC',
  'purple-vivid-400': '#9446ED',
  'purple-vivid-500': '#8719E0',
  'purple-vivid-600': '#7A0ECC',
  'purple-vivid-700': '#690CB0',
  'purple-vivid-800': '#580A94',
  'purple-vivid-900': '#44056E',

  // magenta
  'magenta-050': '#F5E1F7',
  'magenta-100': '#ECBDF2',
  'magenta-200': '#CE80D9',
  'magenta-300': '#BB61C7',
  'magenta-400': '#AD4BB8',
  'magenta-500': '#A23DAD',
  'magenta-600': '#90279C',
  'magenta-700': '#7C1A87',
  'magenta-800': '#671270',
  'magenta-900': '#4E0754',

  // magenta vivid
  'magenta-vivid-050': '#FDEBFF',
  'magenta-vivid-100': '#F8C4FE',
  'magenta-vivid-200': '#F48FFF',
  'magenta-vivid-300': '#F368FC',
  'magenta-vivid-400': '#ED47ED',
  'magenta-vivid-500': '#E019D0',
  'magenta-vivid-600': '#CB10B8',
  'magenta-vivid-700': '#B30BA3',
  'magenta-vivid-800': '#960888',
  'magenta-vivid-900': '#6E0560',

  // pink
  'pink-050': '#FFE0F0',
  'pink-100': '#FAB8D9',
  'pink-200': '#F191C1',
  'pink-300': '#E668A7',
  'pink-400': '#DA4A91',
  'pink-500': '#C42D78',
  'pink-600': '#AD2167',
  'pink-700': '#9B1B5A',
  'pink-800': '#781244',
  'pink-900': '#5C0B33',

  // pink vivid
  'pink-vivid-050': '#FFE3EC',
  'pink-vivid-100': '#FFB8D2',
  'pink-vivid-200': '#FF8CBA',
  'pink-vivid-300': '#F364A2',
  'pink-vivid-400': '#E8368F',
  'pink-vivid-500': '#DA127D',
  'pink-vivid-600': '#BC0A6F',
  'pink-vivid-700': '#A30664',
  'pink-vivid-800': '#870557',
  'pink-vivid-900': '#620042',

  // blue grey
  'blue-grey-050': '#F0F4F8',
  'blue-grey-100': '#D9E2EC',
  'blue-grey-200': '#BCCCDC',
  'blue-grey-300': '#9FB3C8',
  'blue-grey-400': '#829AB1',
  'blue-grey-500': '#627D98',
  'blue-grey-600': '#486581',
  'blue-grey-700': '#334E68',
  'blue-grey-800': '#243B53',
  'blue-grey-900': '#102A43',

  // cool grey
  'cool-grey-050': '#F5F7FA',
  'cool-grey-100': '#E4E7EB',
  'cool-grey-200': '#CBD2D9',
  'cool-grey-300': '#9AA5B1',
  'cool-grey-400': '#7B8794',
  'cool-grey-500': '#616E7C',
  'cool-grey-600': '#52606D',
  'cool-grey-700': '#3E4C59',
  'cool-grey-800': '#323F4B',
  'cool-grey-900': '#1F2933',

  // grey
  'grey-050': '#F7F7F7',
  'grey-100': '#E1E1E1',
  'grey-200': '#CFCFCF',
  'grey-300': '#B1B1B1',
  'grey-400': '#9E9E9E',
  'grey-500': '#7E7E7E',
  'grey-600': '#626262',
  'grey-700': '#515151',
  'grey-800': '#3B3B3B',
  'grey-900': '#222222',

  // warm grey
  'warm-grey-050': '#FAF9F7',
  'warm-grey-100': '#E8E6E1',
  'warm-grey-200': '#D3CEC4',
  'warm-grey-300': '#B8B2A7',
  'warm-grey-400': '#A39E93',
  'warm-grey-500': '#857F72',
  'warm-grey-600': '#625D52',
  'warm-grey-700': '#504A40',
  'warm-grey-800': '#423D33',
  'warm-grey-900': '#27241D',
};

module.exports = {
  /*
  |-----------------------------------------------------------------------------
  | Colors                                  https://tailwindcss.com/docs/colors
  |-----------------------------------------------------------------------------
  |
  | The color palette defined above is also assigned to the "colors" key of
  | your Tailwind config. This makes it easy to access them in your CSS
  | using Tailwind's config helper. For example:
  |
  | .error { color: config('colors.red') }
  |
  */

  colors,

  /*
  |-----------------------------------------------------------------------------
  | Screens                      https://tailwindcss.com/docs/responsive-design
  |-----------------------------------------------------------------------------
  |
  | Screens in Tailwind are translated to CSS media queries. They define the
  | responsive breakpoints for your project. By default Tailwind takes a
  | "mobile first" approach, where each screen size represents a minimum
  | viewport width. Feel free to have as few or as many screens as you
  | want, naming them in whatever way you'd prefer for your project.
  |
  | Tailwind also allows for more complex screen definitions, which can be
  | useful in certain situations. Be sure to see the full responsive
  | documentation for a complete list of options.
  |
  | Class name: .{screen}:{utility}
  |
  */

  screens: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },

  /*
  |-----------------------------------------------------------------------------
  | Fonts                                    https://tailwindcss.com/docs/fonts
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your project's font stack, or font families.
  | Keep in mind that Tailwind doesn't actually load any fonts for you.
  | If you're using custom fonts you'll need to import them prior to
  | defining them here.
  |
  | By default we provide a native font stack that works remarkably well on
  | any device or OS you're using, since it just uses the default fonts
  | provided by the platform.
  |
  | Class name: .font-{name}
  | CSS property: font-family
  |
  */

  fonts: {
    sans: [
      'system-ui',
      'BlinkMacSystemFont',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ],
    serif: [
      'Constantia',
      'Lucida Bright',
      'Lucidabright',
      'Lucida Serif',
      'Lucida',
      'DejaVu Serif',
      'Bitstream Vera Serif',
      'Liberation Serif',
      'Georgia',
      'serif',
    ],
    mono: [
      'Menlo',
      'Monaco',
      'Consolas',
      'Liberation Mono',
      'Courier New',
      'monospace',
    ],
  },

  /*
  |-----------------------------------------------------------------------------
  | Text sizes                         https://tailwindcss.com/docs/text-sizing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text sizes. Name these in whatever way
  | makes the most sense to you. We use size names by default, but
  | you're welcome to use a numeric scale or even something else
  | entirely.
  |
  | By default Tailwind uses the "rem" unit type for most measurements.
  | This allows you to set a root font size which all other sizes are
  | then based on. That said, you are free to use whatever units you
  | prefer, be it rems, ems, pixels or other.
  |
  | Class name: .text-{size}
  | CSS property: font-size
  |
  */

  textSizes: {
    xs: '.75rem', // 12px
    sm: '.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
  },

  /*
  |-----------------------------------------------------------------------------
  | Font weights                       https://tailwindcss.com/docs/font-weight
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your font weights. We've provided a list of
  | common font weight names with their respective numeric scale values
  | to get you started. It's unlikely that your project will require
  | all of these, so we recommend removing those you don't need.
  |
  | Class name: .font-{weight}
  | CSS property: font-weight
  |
  */

  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  /*
  |-----------------------------------------------------------------------------
  | Leading (line height)              https://tailwindcss.com/docs/line-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your line height values, or as we call
  | them in Tailwind, leadings.
  |
  | Class name: .leading-{size}
  | CSS property: line-height
  |
  */

  leading: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    loose: 2,
  },

  /*
  |-----------------------------------------------------------------------------
  | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your letter spacing values, or as we call
  | them in Tailwind, tracking.
  |
  | Class name: .tracking-{size}
  | CSS property: letter-spacing
  |
  */

  tracking: {
    tight: '-0.05em',
    normal: '0',
    wide: '0.05em',
  },

  /*
  |-----------------------------------------------------------------------------
  | Text colors                         https://tailwindcss.com/docs/text-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Class name: .text-{color}
  | CSS property: color
  |
  */

  textColors: colors,

  /*
  |-----------------------------------------------------------------------------
  | Background colors             https://tailwindcss.com/docs/background-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your background colors. By default these use
  | the color palette we defined above, however you're welcome to set
  | these independently if that makes sense for your project.
  |
  | Class name: .bg-{color}
  | CSS property: background-color
  |
  */

  backgroundColors: colors,

  /*
  |-----------------------------------------------------------------------------
  | Background sizes               https://tailwindcss.com/docs/background-size
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your background sizes. We provide some common
  | values that are useful in most projects, but feel free to add other sizes
  | that are specific to your project here as well.
  |
  | Class name: .bg-{size}
  | CSS property: background-size
  |
  */

  backgroundSize: {
    auto: 'auto',
    cover: 'cover',
    contain: 'contain',
  },

  /*
  |-----------------------------------------------------------------------------
  | Border widths                     https://tailwindcss.com/docs/border-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border widths. Take note that border
  | widths require a special "default" value set as well. This is the
  | width that will be used when you do not specify a border width.
  |
  | Class name: .border{-side?}{-width?}
  | CSS property: border-width
  |
  */

  borderWidths: {
    default: '1px',
    '0': '0',
    '2': '2px',
    '4': '4px',
    '8': '8px',
  },

  /*
  |-----------------------------------------------------------------------------
  | Border colors                     https://tailwindcss.com/docs/border-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Take note that border colors require a special "default" value set
  | as well. This is the color that will be used when you do not
  | specify a border color.
  |
  | Class name: .border-{color}
  | CSS property: border-color
  |
  */

  borderColors: global.Object.assign({ default: colors['grey-light'] }, colors),

  /*
  |-----------------------------------------------------------------------------
  | Border radius                    https://tailwindcss.com/docs/border-radius
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border radius values. If a `default` radius
  | is provided, it will be made available as the non-suffixed `.rounded`
  | utility.
  |
  | If your scale includes a `0` value to reset already rounded corners, it's
  | a good idea to put it first so other values are able to override it.
  |
  | Class name: .rounded{-side?}{-size?}
  | CSS property: border-radius
  |
  */

  borderRadius: {
    none: '0',
    sm: '.125rem',
    default: '.25rem',
    lg: '.5rem',
    full: '9999px',
  },

  /*
  |-----------------------------------------------------------------------------
  | Width                                    https://tailwindcss.com/docs/width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your width utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based numeric scale, a percentage
  | based fraction scale, plus some other common use-cases. You
  | can, of course, modify these values as needed.
  |
  |
  | It's also worth mentioning that Tailwind automatically escapes
  | invalid CSS class name characters, which allows you to have
  | awesome classes like .w-2/3.
  |
  | Class name: .w-{size}
  | CSS property: width
  |
  */

  width: {
    auto: 'auto',
    px: '1px',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '24': '6rem',
    '32': '8rem',
    '48': '12rem',
    '64': '16rem',
    '1/2': '50%',
    '1/3': '33.33333%',
    '2/3': '66.66667%',
    '1/4': '25%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.66667%',
    '5/6': '83.33333%',
    full: '100%',
    screen: '100vw',
  },

  /*
  |-----------------------------------------------------------------------------
  | Height                                  https://tailwindcss.com/docs/height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your height utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based numeric scale plus some other
  | common use-cases. You can, of course, modify these values as
  | needed.
  |
  | Class name: .h-{size}
  | CSS property: height
  |
  */

  height: {
    auto: 'auto',
    px: '1px',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '24': '6rem',
    '32': '8rem',
    '48': '12rem',
    '64': '16rem',
    full: '100%',
    screen: '100vh',
  },

  /*
  |-----------------------------------------------------------------------------
  | Minimum width                        https://tailwindcss.com/docs/min-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your minimum width utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | couple common use-cases by default. You can, of course, modify
  | these values as needed.
  |
  | Class name: .min-w-{size}
  | CSS property: min-width
  |
  */

  minWidth: {
    '0': '0',
    full: '100%',
  },

  /*
  |-----------------------------------------------------------------------------
  | Minimum height                      https://tailwindcss.com/docs/min-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your minimum height utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | few common use-cases by default. You can, of course, modify these
  | values as needed.
  |
  | Class name: .min-h-{size}
  | CSS property: min-height
  |
  */

  minHeight: {
    '0': '0',
    full: '100%',
    screen: '100vh',
  },

  /*
  |-----------------------------------------------------------------------------
  | Maximum width                        https://tailwindcss.com/docs/max-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your maximum width utility sizes. These can
  | be percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based scale and a "full width" size,
  | which is basically a reset utility. You can, of course,
  | modify these values as needed.
  |
  | Class name: .max-w-{size}
  | CSS property: max-width
  |
  */

  maxWidth: {
    xs: '20rem',
    sm: '30rem',
    md: '40rem',
    lg: '50rem',
    xl: '60rem',
    '2xl': '70rem',
    '3xl': '80rem',
    '4xl': '90rem',
    '5xl': '100rem',
    full: '100%',
  },

  /*
  |-----------------------------------------------------------------------------
  | Maximum height                      https://tailwindcss.com/docs/max-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your maximum height utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | couple common use-cases by default. You can, of course, modify
  | these values as needed.
  |
  | Class name: .max-h-{size}
  | CSS property: max-height
  |
  */

  maxHeight: {
    full: '100%',
    screen: '100vh',
  },

  /*
  |-----------------------------------------------------------------------------
  | Padding                                https://tailwindcss.com/docs/padding
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your padding utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .p{side?}-{size}
  | CSS property: padding
  |
  */

  padding: {
    px: '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
  },

  /*
  |-----------------------------------------------------------------------------
  | Margin                                  https://tailwindcss.com/docs/margin
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your margin utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .m{side?}-{size}
  | CSS property: margin
  |
  */

  margin: {
    auto: 'auto',
    px: '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
  },

  /*
  |-----------------------------------------------------------------------------
  | Negative margin                https://tailwindcss.com/docs/negative-margin
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your negative margin utility sizes. These can
  | be percentage based, pixels, rems, or any other units. By default we
  | provide matching values to the padding scale since these utilities
  | generally get used together. You can, of course, modify these
  | values as needed.
  |
  | Class name: .-m{side?}-{size}
  | CSS property: margin
  |
  */

  negativeMargin: {
    px: '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
  },

  /*
  |-----------------------------------------------------------------------------
  | Shadows                                https://tailwindcss.com/docs/shadows
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your shadow utilities. As you can see from
  | the defaults we provide, it's possible to apply multiple shadows
  | per utility using comma separation.
  |
  | If a `default` shadow is provided, it will be made available as the non-
  | suffixed `.shadow` utility.
  |
  | Class name: .shadow-{size?}
  | CSS property: box-shadow
  |
  */

  shadows: {
    default: '0 2px 4px 0 rgba(0,0,0,0.10)',
    md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
    lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    outline: '0 0 0 3px rgba(52,144,220,0.5)',
    none: 'none',
  },

  /*
  |-----------------------------------------------------------------------------
  | Z-index                                https://tailwindcss.com/docs/z-index
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your z-index utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .z-{index}
  | CSS property: z-index
  |
  */

  zIndex: {
    auto: 'auto',
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50,
  },

  /*
  |-----------------------------------------------------------------------------
  | Opacity                                https://tailwindcss.com/docs/opacity
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your opacity utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .opacity-{name}
  | CSS property: opacity
  |
  */

  opacity: {
    '0': '0',
    '25': '.25',
    '50': '.5',
    '75': '.75',
    '100': '1',
  },

  /*
  |-----------------------------------------------------------------------------
  | SVG fill                                   https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your SVG fill colors. By default we just provide
  | `fill-current` which sets the fill to the current text color. This lets you
  | specify a fill color using existing text color utilities and helps keep the
  | generated CSS file size down.
  |
  | Class name: .fill-{name}
  | CSS property: fill
  |
  */

  svgFill: {
    current: 'currentColor',
  },

  /*
  |-----------------------------------------------------------------------------
  | SVG stroke                                 https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your SVG stroke colors. By default we just provide
  | `stroke-current` which sets the stroke to the current text color. This lets
  | you specify a stroke color using existing text color utilities and helps
  | keep the generated CSS file size down.
  |
  | Class name: .stroke-{name}
  | CSS property: stroke
  |
  */

  svgStroke: {
    current: 'currentColor',
  },

  /*
  |-----------------------------------------------------------------------------
  | Modules                  https://tailwindcss.com/docs/configuration#modules
  |-----------------------------------------------------------------------------
  |
  | Here is where you control which modules are generated and what variants are
  | generated for each of those modules.
  |
  | Currently supported variants:
  |   - responsive
  |   - hover
  |   - focus
  |   - focus-within
  |   - active
  |   - group-hover
  |
  | To disable a module completely, use `false` instead of an array.
  |
  */

  modules: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColors: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColors: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidths: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexbox: ['responsive'],
    float: ['responsive'],
    fonts: ['responsive'],
    fontWeights: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    leading: ['responsive'],
    lists: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    objectFit: false,
    objectPosition: false,
    opacity: ['responsive'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    shadows: ['responsive', 'hover', 'focus'],
    svgFill: [],
    svgStroke: [],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColors: ['responsive', 'hover', 'focus'],
    textSizes: ['responsive'],
    textStyle: ['responsive', 'hover', 'focus'],
    tracking: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive'],
  },

  /*
  |-----------------------------------------------------------------------------
  | Plugins                                https://tailwindcss.com/docs/plugins
  |-----------------------------------------------------------------------------
  |
  | Here is where you can register any plugins you'd like to use in your
  | project. Tailwind's built-in `container` plugin is enabled by default to
  | give you a Bootstrap-style responsive container component out of the box.
  |
  | Be sure to view the complete plugin documentation to learn more about how
  | the plugin system works.
  |
  */

  plugins: [
    require('tailwindcss/plugins/container')({
      // center: true,
      // padding: '1rem',
    }),
  ],

  /*
  |-----------------------------------------------------------------------------
  | Advanced Options         https://tailwindcss.com/docs/configuration#options
  |-----------------------------------------------------------------------------
  |
  | Here is where you can tweak advanced configuration options. We recommend
  | leaving these options alone unless you absolutely need to change them.
  |
  */

  options: {
    prefix: '',
    important: false,
    separator: ':',
  },
};
