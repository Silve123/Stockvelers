# Rpg Game Icons for React Native

### react-native-ico-rpg-game

495 Vector Icons for React Native

<img src="./static/all-for-one.png" alt="all-for-one" width="150" height="150"> <img src="./static/alligator-clip.png" alt="alligator-clip" width="150" height="150"> <img src="./static/ammo-bag.png" alt="ammo-bag" width="150" height="150">

## List of icons

- [List of Rpg Game Icons](http://ico.simpleness.org/pack/rpg-game)

## Usage

```
import Icon from 'react-native-ico-rpg-game';


// Inside some view component
render() {
    return (
        <>
          <Icon name="all-for-one" />
          <Icon name="alligator-clip" height="40" width="40" />
          <Icon name="ammo-bag" color="red" />
          <Icon name="alligator-clip" badge="10" />
          <Icon name="alligator-clip" badge={{value: 'A', fontSize: 25, radius: 22, position:'top_left', color:'orange', backgroundColor:'blue'}}/>
          <Icon name="all-for-one" background="circle" />
          <Icon name="all-for-one" background={{ type: "button", color: 'green' }} />
        </>
    );
}

```

## Installation

#### yarn

```bash
yarn add react-native-ico-rpg-game react-native-svg
```

#### npm

```bash
npm install --save react-native-ico-rpg-game react-native-svg
```

### Link react-native-svg

```bash
react-native link react-native-svg
```

### pod install ( for iOS )

```
cd ios && pod install && cd ..
```

## API

### <Icon name [color width height background badge ...rest] />

Returns a SvgXml icon by name and group.

 name | optional | default value | description | examples
------|----------|---------------|-------------|---------
name | no |  | name of icon | "all-for-one"
color | yes | | line color, css style | "#00ff00", "#0f0", "green"
width | yes | 20 | width of the icon | 40
height | yes | 20 | height of the icon | 40
background | no | | background type | "circle"
background | no | | background object | {type: "circle", color: 'yellow'}
badge | no | | badge string | "10"
badge | no | | badge object | {value: 'A', fontSize: 25, radius: 22, position:'top_left', color:'orange', backgroundColor:'blue'}
...rest | no | | other props | style={{backgroundColor: "#00f"}}

## Icons Made by

[Dave Gandy](https://www.flaticon.com/authors/dave-gandy)

## Created by

Dimitry Ivanov <2@ivanoff.org.ua> # curl -A cv ivanoff.org.ua
