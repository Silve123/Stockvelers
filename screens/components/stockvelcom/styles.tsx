import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
  },
  Headers: {
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 10,
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 30,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: -30,
  },
  Headertext: {
    color: 'black',
  },
  description: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 12,
  },
  RulesTitle: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5,
    fontSize: 25,
  },
  RulesText: {
    color: 'white',
    paddingVertical: 1,
  },
  MemberTitle: {
    color: 'black',
    textAlign: 'center',
    paddingVertical: 5,
    fontSize: 25,
  },
  membersHeadings: {
    color: 'black',
  },
  MemberContainer: {
    height: 200,
    paddingHorizontal: 5,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'red',
  },
  RulesContainer: {
    backgroundColor: '#363636',
    padding: 5,
    marginTop: 10,
    borderRadius: 5,
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  rowSet: {
    justifyContent: 'flex-start',
  },
  Join: {
    backgroundColor: 'green',
  },
  Pay: {
    backgroundColor: 'orange',
  },
  Button: {
    width: '20%',
    padding: 10,
    borderRadius: 10,
    margin: 5,
  },
  ButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  HomeContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  imageBackground: {
    height: 150,
  },
  detailsContainer: {
    paddingHorizontal: 10,
  },
  scrollContainer: {
    height: 600,
    marginTop: 5,
    marginBottom: 60,
    bottom: 0,
  },
  alert: {
    color: 'red',
  },
});
export default styles;
