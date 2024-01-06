# Supraicons Icons for React Native

### react-native-ico-supraicons

244 Vector Icons for React Native

<img src="./static/add-song-interface-symbol.png" alt="add-song-interface-symbol" width="150" height="150"> <img src="./static/add-to-cart-commercial-symbol.png" alt="add-to-cart-commercial-symbol" width="150" height="150"> <img src="./static/add-to-shopping-cart-e-commerce-symbol.png" alt="add-to-shopping-cart-e-commerce-symbol" width="150" height="150">

## List of icons

- [List of Supraicons Icons](http://ico.simpleness.org/pack/supraicons)

## Usage

```
import Icon from 'react-native-ico-supraicons';


// Inside some view component
render() {
    return (
        <>
          <Icon name="add-song-interface-symbol" />
          <Icon name="add-to-cart-commercial-symbol" height="40" width="40" />
          <Icon name="add-to-shopping-cart-e-commerce-symbol" color="red" />
          <Icon name="add-to-cart-commercial-symbol" badge="10" />
          <Icon name="add-to-cart-commercial-symbol" badge={{value: 'A', fontSize: 25, radius: 22, position:'top_left', color:'orange', backgroundColor:'blue'}}/>
          <Icon name="add-song-interface-symbol" background="circle" />
          <Icon name="add-song-interface-symbol" background={{ type: "button", color: 'green' }} />
        </>
    );
}

```

## Installation

#### yarn

```bash
yarn add react-native-ico-supraicons react-native-svg
```

#### npm

```bash
npm install --save react-native-ico-supraicons react-native-svg
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
name | no |  | name of icon | "add-song-interface-symbol"
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
