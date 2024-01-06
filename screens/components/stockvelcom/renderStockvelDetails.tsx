import {Text, View} from 'react-native';
import styles from './styles';

const renderStockvelDetails = (stockvelData, user) => {
  function displayFirstThreeCharacters(str) {
    const firstThreeChars = str.substring(0, 3);
    const remainingChars = str.substring(3);
    const maskedString = firstThreeChars + '*'.repeat(remainingChars.length);
    return maskedString;
  }

  if (stockvelData.type === 'Savings') {
    // Check if the user is a member of the Savings stockvel
    function getSavingsRules(stockvelData: any): React.ReactNode {
      return (
        <View style={styles.RulesContainer}>
          <Text style={styles.RulesTitle}>Rules</Text>
          <View style={styles.Row}>
            <View style={[styles.rowSet, {width: '50%'}]}>
              <Text style={styles.RulesText}>
                Contribution: R{stockvelData.rules.contribution}
              </Text>
              <Text style={styles.RulesText}>
                Interval: {stockvelData.rules.interval}
              </Text>
            </View>
            <View style={[styles.rowSet, {width: '50%'}]}>
              <Text style={styles.RulesText}>
                Due: {stockvelData.rules.payout.toDate().toDateString()}
              </Text>
              <Text style={styles.RulesText}>
                Limit: {stockvelData.rules.people}
              </Text>
            </View>
          </View>
        </View>
      );
    }
    if (stockvelData.members && stockvelData.members[user.email]) {
      // User is a member
      return (
        <View>
          {/* headers */}
          <View style={styles.Headers}>
            <Text style={styles.mainTitle}>{stockvelData.type}</Text>
            <View style={styles.Row}>
              <View style={[styles.rowSet, {flex: 1}]}>
                <Text style={styles.Headertext}>Name: {stockvelData.name}</Text>
                <Text style={styles.headerText}>
                  Balance: R{stockvelData.balance}
                </Text>
                <Text style={styles.headerText}>
                  Cycle: {stockvelData.current_cycle}
                </Text>
              </View>
              <View style={[styles.rowSet, {justifyContent: 'flex-end'}]}>
                <Text
                  style={[
                    styles.circle,
                    {
                      backgroundColor: stockvelData.active ? 'green' : 'red',
                    },
                  ]}>
                  Active
                </Text>
              </View>
            </View>
            <Text style={styles.description}>{stockvelData.description}</Text>
          </View>
          {/* members */}
          <View style={styles.MemberContainer}>
            <Text style={styles.MemberTitle}>Members</Text>
            <View style={styles.rowSet}>
              <View style={[styles.rowSet, {flexDirection: 'row'}]}>
                <Text style={[styles.membersHeadings, {width: '70%'}]}>
                  Email
                </Text>
                <Text style={[styles.membersHeadings, {width: '30%'}]}>
                  Paid
                </Text>
              </View>
            </View>
            {Object.keys(stockvelData.members).map(email => (
              <View key={email} style={[styles.rowSet, {flexDirection: 'row'}]}>
                <Text
                  style={[
                    styles.RulesText,
                    {width: '70%', fontSize: 12, color: 'black'},
                  ]}>
                  {displayFirstThreeCharacters(email)}
                </Text>
                <Text
                  style={[
                    styles.RulesText,
                    {
                      width: '30%',
                      fontSize: 12,
                      color: stockvelData.members[email].paid ? 'green' : 'red',
                    },
                  ]}>
                  {stockvelData.members[email].paid ? 'Yes' : 'No'}
                </Text>
              </View>
            ))}
          </View>
          {/* rules */}
          {getSavingsRules(stockvelData)}
        </View>
      );
    } else {
      // User is not a member
      return (
        <View>
          <View style={styles.Headers}>
            <Text style={styles.mainTitle}>{stockvelData.type}</Text>
            <View style={styles.Row}>
              <View style={[styles.rowSet, {flex: 1}]}>
                <Text style={styles.Headertext}>Name: {stockvelData.name}</Text>
              </View>
              <View style={[styles.rowSet, {justifyContent: 'flex-end'}]}>
                <Text
                  style={[
                    styles.circle,
                    {
                      backgroundColor: stockvelData.active ? 'green' : 'red',
                      marginTop: -20,
                    },
                  ]}>
                  Active
                </Text>
              </View>
            </View>
            <Text style={styles.description}>{stockvelData.description}</Text>
          </View>
          {getSavingsRules(stockvelData)}
        </View>
      );
    }
  } else if (stockvelData.type === 'Rotational') {
    // Check if the user is a member of the Rotational stockvel
    function getRotationalRules(stockvelData: any): React.ReactNode {
      return (
        <View style={styles.RulesContainer}>
          <Text style={styles.RulesTitle}>Rules</Text>
          <View style={styles.Row}>
            <View style={[styles.rowSet, {width: '50%'}]}>
              <Text style={styles.RulesText}>
                Contribution: {stockvelData.rules.contribution}
              </Text>
              <Text style={styles.RulesText}>
                Interval: {stockvelData.rules.interval}
              </Text>
            </View>
            <View style={[styles.rowSet, {width: '50%'}]}>
              <Text style={styles.RulesText}>
                Limit: {stockvelData.rules.people}
              </Text>
            </View>
          </View>
        </View>
      );
    }
    if (stockvelData.members && stockvelData.members[user.email]) {
      // User is a member
      return (
        <View>
          {/* headers */}
          <View style={styles.Headers}>
            <Text style={styles.mainTitle}>{stockvelData.type}</Text>
            <View style={styles.Row}>
              <View style={[styles.rowSet, {flex: 1}]}>
                <Text style={styles.Headertext}>Name: {stockvelData.name}</Text>
                <Text style={styles.headerText}>
                  Balance: R{stockvelData.balance}
                </Text>
                <Text style={styles.headerText}>
                  Cycle: {stockvelData.current_cycle}
                </Text>
              </View>
              <View style={[styles.rowSet, {justifyContent: 'flex-end'}]}>
                <Text
                  style={[
                    styles.circle,
                    {
                      backgroundColor: stockvelData.active ? 'green' : 'red',
                    },
                  ]}>
                  Active
                </Text>
              </View>
            </View>
            <Text style={styles.description}>{stockvelData.description}</Text>
          </View>
          {/* members */}
          <View style={styles.MemberContainer}>
            <Text style={styles.MemberTitle}>Members</Text>
            <View style={styles.Row}>
              <View style={[styles.rowSet, {flexDirection: 'row'}]}>
                <Text style={[styles.membersHeadings, {width: '50%'}]}>
                  Email
                </Text>
                <Text
                  style={[
                    styles.membersHeadings,
                    {width: '20%', textAlign: 'center'},
                  ]}>
                  Paid
                </Text>
                <Text
                  style={[
                    styles.membersHeadings,
                    {width: '30%', textAlign: 'right'},
                  ]}>
                  User Cycle
                </Text>
              </View>
            </View>
            {Object.keys(stockvelData.members).map(email => (
              <View key={email} style={[styles.rowSet, {flexDirection: 'row'}]}>
                <Text
                  style={[
                    styles.RulesText,
                    {width: '50%', fontSize: 12, color: 'black'},
                  ]}>
                  {displayFirstThreeCharacters(email)}
                </Text>
                <Text
                  style={[
                    styles.RulesText,
                    {
                      textAlign: 'center',
                      width: '20%',
                      fontSize: 12,
                      color: stockvelData.members[email].paid ? 'green' : 'red',
                    },
                  ]}>
                  {stockvelData.members[email].paid ? 'Yes' : 'No'}
                </Text>
                <Text
                  style={[
                    styles.membersHeadings,
                    {width: '30%', textAlign: 'right'},
                  ]}>
                  {stockvelData.members[email].cycle}
                </Text>
              </View>
            ))}
          </View>
          {/* rules */}
          {getRotationalRules(stockvelData)}
        </View>
      );
    } else {
      // User is not a member
      return (
        <View>
          <View style={styles.Headers}>
            <Text style={styles.mainTitle}>{stockvelData.type}</Text>
            <View style={styles.Row}>
              <View style={[styles.rowSet, {flex: 1}]}>
                <Text style={styles.Headertext}>Name: {stockvelData.name}</Text>
              </View>
              <View style={[styles.rowSet, {justifyContent: 'flex-end'}]}>
                <Text
                  style={[
                    styles.circle,
                    {
                      backgroundColor: stockvelData.active ? 'green' : 'red',
                      marginTop: -20,
                    },
                  ]}>
                  Active
                </Text>
              </View>
            </View>
            <Text style={styles.description}>{stockvelData.description}</Text>
          </View>
          {getRotationalRules(stockvelData)}
        </View>
      );
    }
  } else {
    // Handle other types if needed
    return null;
  }
};

export default renderStockvelDetails;
