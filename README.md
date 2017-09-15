# react-native-btns

React native buttons for real world app. Easy to setup, configure and use.

## Installation

  ```
  npm install react-native-btns --save
  ```
  or
  ```
  yarn add react-native-btns
  ```

## Usage

```
import { LinkButton, IconButton, SuperButton, FooterButton } from 'react-native-btns'
```

### LinkButton

```
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

```
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

```
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

```
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