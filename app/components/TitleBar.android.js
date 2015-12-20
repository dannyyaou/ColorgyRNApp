import React, {
  StyleSheet,
  View,
  Text
} from 'react-native';

let TitleBarView = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
    };
  },

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.actions}>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            {this.props.title}
          </Text>
        </View>
        <View style={styles.actions}>
        </View>
      </View>
    );
  }
});

let styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  actions: {
    padding: 16
  },
  title: {
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 20,
    paddingBottom: 20,
  },
  titleText: {
    fontSize: 20,
    color: '#FFFFFF'
  }
});

export default TitleBarView;