import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';

export default class ListItem extends Component {
  onRowPress() {
    Actions.expenseEdit({ expense: this.props.expense });
  }

  render() {
    const { name, amount } = this.props.expense;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection style={styles.containerStyle}>
            <View style={{ alignSelf: 'flex-start' }}>
              <Text style={styles.titleStyle}>
                {name}
              </Text>
            </View>
            <View style={{ alignSelf: 'flex-end' }}>
              <Text style={styles.titleStyle}>
                {parseFloat((amount * 100)/100)} €
              </Text>
            </View>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  containerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleStyle: {
    fontSize: 20,
    lineHeight: 22,
    margin: 20,
    color: 'black'
  }
};