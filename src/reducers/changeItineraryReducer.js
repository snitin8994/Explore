import produce from 'immer'
import {
  GET_ITINERARY_DATA_START,
  GET_ITINERARY_DATA_FAIL,
  CHANGE_ITINERARY_SELECT_OPTION,
  GET_ITINERARY_DATA_SUCCESS,
  SET_ITINERARY_TRIP_OBJECT,
  EDIT_ITINERARY_DATA
} from '../actions/actionConstants'

export default (state = {}, action) => {
  switch (action.type) {
    case SET_ITINERARY_TRIP_OBJECT:
      return produce(state, draft => {
        draft[action.payload.tripId] = {
          error: false,
          errorMessage:'',
          isLoading: true,
          data: [],
          selectedOption: {
            label: null,
            value: null
          }
        }
      })

    case EDIT_ITINERARY_DATA: {
      return produce(state, draft => {
        const trip = draft[action.payload.tripId]
        for (let i = 0; i < trip.data.length; i++) {
          const itineraryDayData = trip.data[i]
          if (itineraryDayData._id === action.payload._id) {
            itineraryDayData.activity = action.payload.activity
          }
        }
      })
    }

    case GET_ITINERARY_DATA_START: {
      return produce(state, draft => {
        const trip = draft[action.payload.tripId]
        trip.isLoading = true
      })
    }

    case GET_ITINERARY_DATA_SUCCESS: {
      return produce(state, draft => {
        const trip = draft[action.payload.tripId]
        trip.isLoading = false
        trip.data = action.payload.data
        trip.selectedOption = action.payload.selectedOption
      })
    }

    case GET_ITINERARY_DATA_FAIL: {
      return produce(state, draft => {
        const trip = draft[action.payload.tripId]
        trip.isLoading = false
        trip.error = true
        trip.errorMessage = action.payload.error
      })
    }

    case CHANGE_ITINERARY_SELECT_OPTION: {
      return produce(state, draft => {
        const trip = draft[action.payload.tripId]
        trip.selectedOption = action.payload.selectedOption
      })
    }

    default:
      return state
  }
}
