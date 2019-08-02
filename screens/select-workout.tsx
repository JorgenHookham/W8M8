import React from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'react-native';
import { WorkoutPlan, AppState } from "../_interface";
import Screen from "./_interface";
import screenStyles from "./_style";
import { activateWorkoutPlan, fetchWorkoutPlans } from "../actions";
import { FlatList } from 'react-native-gesture-handler';

const mapStateToProps = (state: AppState) => ({
  isFetching: state.workoutPlans.isFetching,
  lastUpdated: state.workoutPlans.lastUpdated,
  workoutPlans: state.workoutPlans.itemsById.map(planById => planById.object)
});

const mapDispatchToProps = {
  activateWorkoutPlan,
  fetchWorkoutPlans,
};

type ScreenSelectWorkout = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & Screen & {
  workoutPlans: WorkoutPlan[];
}

function SelectWorkoutScreen(props: ScreenSelectWorkout) {
  if (!props.isFetching && !props.lastUpdated) {
    props.fetchWorkoutPlans();
  }

  const activateWorkout = (value) => props.activateWorkoutPlan(value);

  const renderItem = ({item, index}: {item: WorkoutPlan, index: number}) => {
    return <View>
      <Text
        onPress={() => activateWorkout(item.id)}
      >{item.name}</Text>
    </View>
  }

  return (
    <View style={screenStyles.container}>
      <Text>Select Workout</Text>
      <FlatList
        data={props.workoutPlans}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button
        title="Go To Home Screen"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
}

// Connect to redux

export default connect(mapStateToProps, mapDispatchToProps)(SelectWorkoutScreen);