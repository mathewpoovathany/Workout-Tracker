init();

async function init() {
  const workout = await API.getLastWorkout();

  if (workout) {
    const workoutDbId = workout._id;
    const workoutUrlId = location.search.split("=")[1];

    if (workoutUrlId === undefined) {
      location.search = `?id=${workoutDbId}`;
    } else {
      if (workoutUrlId !== workoutDbId) {
        location.search = `?id=${workoutDbId}`;
      }
    }

  } else {
    document.querySelector("#continue-btn").classList.add("d-none");
  }

}