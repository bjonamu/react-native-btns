# react-native-btns

React native buttons for real world apps. Easy to setup, configure and use.

[![Screenshot](https://s26.postimg.org/st94b9o5l/Simulator_Screen_Shot_15_Sep_2017_10.17.44_AM.png)](https://postimg.org/image/t60ihg6f9/)

## Installation

  ```bash
  npm install react-native-btns --save
  ```
  or
  ```bash
  yarn add react-native-btns
  ```

## Usage

```js
import { LinkButton, IconButton, SuperButton, FooterButton } from 'react-native-btns'
```

### LinkButton

```js
<LinkButton
  uppercase
  labelStyle={styles.label}
  onPress={() => this.doSomethingUseful()}
/>
```

#### LinkButton props

| Props                  | Default values | Possible values                            |
| ---------------------- | -------------- | ------------------------------------------ |
| label                  | Link button    | **any string**                             |
| labelStyle             |                | **style object**                           |
| uppercase              | false          | Boolean                                    |
| leftIcon               | **none**       | Icon element e.g react-native-vector-icons |
| rightIcon              | **none**       | Icon element e.g react-native-vector-icons |
| active                 | false          | Boolean                                    |
| disabled               | false          | Boolean                                    |
| activityIndicatorColor | white          | Color string (hex or rbg/a)                |
| onPress                | **none**       | function                                   |

### IconButton

```js
<IconButton
  round
  size={50}
  icon={<Icon size={30} name='fingerprint' style={styles.whiteIcon} />}
  backgroundColor='#F70044'
  onPress={() => this.doSomethingUseful()}
/>
```

#### IconButton props

| Props                  | Default values | Possible values             |
| ---------------------- | -------------- | --------------------------- |
| size                   | 50             | Integer                     |
| round                  | false          | Boolean                     |
| active                 | false          | Boolean                     |
| disabled               | false          | Boolean                     |
| activityIndicatorColor | white          | Color string (hex or rbg/a) |
| borderColor            | **none**       | Color string (hex or rbg/a) |
| onPress                | **none**       | function                    |

### SuperButton

```js
<SuperButton
  uppercase
  size='large'
  backgroundColor='#11CD86'
  onPress={() => this.doSomethingUseful()}
/>
```

#### SuperButton props

| Props                  | Default values | Possible values                            |
| ---------------------- | -------------- | ------------------------------------------ |
| size                   | 'normal'       | enum 'tiny', 'normal', 'large'             |
| label                  | Link button    | **any string**                             |
| labelStyle             |                | **style object**                           |
| uppercase              | false          | Boolean                                    |
| leftIcon               | **none**       | Icon element e.g react-native-vector-icons |
| rightIcon              | **none**       | Icon element e.g react-native-vector-icons |
| round                  | false          | Boolean                                    |
| softCorners            | false          | Boolean                                    |
| active                 | false          | Boolean                                    |
| disabled               | false          | Boolean                                    |
| backgroundColor        | transparent    | Color string (hex or rbg/a)                |
| activityIndicatorColor | white          | Color string (hex or rbg/a)                |
| borderColor            | transparent    | Color string (hex or rbg/a)                |
| borderWidth            | 0              | Number                                     |
| onPress                | **none**       | function                                   |

### FooterButton

```js
<FooterButton
  uppercase
  size='large'
  label='Next'
  backgroundColor='#066FA5'
  labelStyle={{ fontSize: 14, color: '#fff' }}
  rightIcon={<Icon size={20} name='chevron-thin-right' style={styles.whiteIcon} />}
  onPress={() => this.doSomethingUseful()}
/>
```

#### FooterButton props

| Props                  | Default values | Possible values                            |
| ---------------------- | -------------- | ------------------------------------------ |
| size                   | 'normal'       | enum 'tiny', 'normal', 'large'             |
| label                  | Link button    | **any string**                             |
| labelStyle             |                | **style object**                           |
| uppercase              | false          | Boolean                                    |
| leftIcon               | **none**       | Icon element e.g react-native-vector-icons |
| rightIcon              | **none**       | Icon element e.g react-native-vector-icons |
| active                 | false          | Boolean                                    |
| disabled               | false          | Boolean                                    |
| backgroundColor        | transparent    | Color string (hex or rbg/a)                |
| activityIndicatorColor | white          | Color string (hex or rbg/a)                |
| onPress                | **none**       | function                                   |

TODO
* ADD: disabledColor prop
* ADD: elevation prop
