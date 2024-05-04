# React Beautiful Timeline

React Beautiful Timeline is a resposive timeline with animations that allows users to switch between vertical and horizontal orientations.

[Demo](https://stackblitz.com/edit/react-beautiful-timeline?file=src%2FApp.tsx)

![React Beautiful Timeline Demo](https://github.com/mevlutcantuna/react-beautiful-timeline/blob/main/assets/demo.gif)

## Features

- 🚥&nbsp; **Versatile Display**: Render timelines in both `Horizontal` and `Vertical` modes, providing flexibility in presentation.

- 📺&nbsp; **Auto Animation**: Enjoy the seamless experience of auto-starting animations when the timeline enters the viewport.

- 🔧&nbsp; **Easy Customization**: Effortlessly render custom content with straightforward customization options.

- 🎭&nbsp; **Component Flexibility**: Customize every component with ease, allowing you to tailor the appearance to your specific needs.

- 🖼️&nbsp; **Custom Icons**: Enhance visual appeal by using custom icons within the dots of the timeline.

- 💪&nbsp; **TypeScript Integration**: Benefit from the advantages of [Typescript](https://www.typescriptlang.org/) for enhanced code reliability.

- 🎨&nbsp; **TailwindCSS Styling**: Achieve a sleek and modern design with styling powered by [TailwindCSS](https://tailwindcss.com/).

## Installation

Using [npm](https://npmjs.com/)

1. Install the package:

```
  npm install react-beautiful-timeline
```

2. Import the timeline styles in your main JavaScript file:

```
  import "react-beautiful-timeline/dist/style.css";
```

## Usage

Example:

```javascript
<Timeline>
  <TimelineItem>TimelineContent</TimelineItem>
  <TimelineItem>TimelineContent</TimelineItem>
  <TimelineItem>TimelineContent</TimelineItem>
</Timeline>
```

## `<Timeline/> Props`

Below are the available configuration options for the component:

| Name                | Type                           | Description                                                       |
| ------------------- | ------------------------------ | ----------------------------------------------------------------- |
| `type`              | `'vertical'` or `'horizontal'` | Specifies the orientation of the timeline (default is horizontal) |
| `animation`         | `boolean`                      | Enables/disables animation for the timeline (default is `true`)   |
| `activeLineStyle`   | `CSSProperties`                | Custom CSS properties for styling the active line                 |
| `passiveLineStyle`  | `CSSProperties`                | Custom CSS properties for styling the passive line                |
| `animationDuration` | `number`                       | Duration of the animation in milliseconds (default is `6000ms`)   |
| `responsiveWidth`   | `number`                       | Switch the orientation of the timeline at responsiveWidth         |

## `<TimelineItem/> Props`

Below are the available configuration options for the component:

| Name       | Type                       | Description                                                        |
| ---------- | -------------------------- | ------------------------------------------------------------------ |
| `dotColor` | `string`                   | Color of the dot in the TimelineItem                               |
| `place`    | `'normal'` or `'opposite'` | Specifies the orientation of the timeline item (default is normal) |
| `dotIcon`  | `any`                      | Custom content to be placed inside the dot                         |
| `dotStyle` | `CSSProperties`            | CSS properties to customize the style of the dot                   |
| `dotText`  | `any`                      | Custom content to be placed above or beside the dot                |

## 🤝Contributing

We welcome contributions! If you find a bug or have an idea for improvement, please open an issue or submit a pull request on [Github](https://github.com/mevlutcantuna/react-beautiful-timeline).

1. [Fork it](https://github.com/mevlutcantuna/react-beautiful-timeline/fork)
2. Create your feature branch (`git checkout -b new-feature`)
3. Commit your changes (`git commit -am 'Add feature'`)
4. Push to the branch (`git push origin new-feature`)
5. Create a new Pull Request

## Author ✨

💻 &nbsp; MEVLÜT CAN TUNA

- [LinkedIn](https://linkedin.com/in/mevlutcantuna)
- [Github](https://www.github.com/mevlutcantuna)

## Licence

This project is licensed under the MIT License.
