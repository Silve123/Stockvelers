# Sign And Symbols Icons for React Native

### react-native-ico-sign-and-symbols

662 Vector Icons for React Native

<img src="./static/15-s-for-menu.png" alt="15-s-for-menu" width="150" height="150"> <img src="./static/16-weather-illustrations.png" alt="16-weather-illustrations" width="150" height="150"> <img src="./static/1st-place-37.png" alt="1st-place-37" width="150" height="150">

## List of icons

- [List of Sign And Symbols Icons](http://ico.simpleness.org/pack/sign-and-symbols)

## Usage

```
import Icon from 'react-native-ico-sign-and-symbols';


// Inside some view component
render() {
    return (
        <>
          <Icon name="15-s-for-menu" />
          <Icon name="16-weather-illustrations" height="40" width="40" />
          <Icon name="1st-place-37" color="red" />
          <Icon name="16-weather-illustrations" badge="10" />
          <Icon name="16-weather-illustrations" badge={{value: 'A', fontSize: 25, radius: 22, position:'top_left', color:'orange', backgroundColor:'blue'}}/>
          <Icon name="15-s-for-menu" background="circle" />
          <Icon name="15-s-for-menu" background={{ type: "button", color: 'green' }} />
        </>
    );
}

```

## Installation

#### yarn

```bash
yarn add react-native-ico-sign-and-symbols react-native-svg
```

#### npm

```bash
npm install --save react-native-ico-sign-and-symbols react-native-svg
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
name | no |  | name of icon | "15-s-for-menu"
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
