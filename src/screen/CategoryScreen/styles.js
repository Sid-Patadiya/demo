import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/Colors';
import {scale} from '../../themes/Scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White_100,
  },
  mainContainer: {
    flex: 1,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10,
  },
  profileContainer: {
    alignItems: 'center',
    margin: 10,
  },
  profileImage: {
    width: scale(65),
    height: scale(65),
    borderRadius: 100,
  },
  countryFlag: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    right: 0,
    top: 5,
    borderWidth: 0.5,
  },
  profileName: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  headingViewContainer: {
    backgroundColor: Colors.Secondary_300,
    flexGrow: 0,
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    color: Colors.Text_100,
  },
});
