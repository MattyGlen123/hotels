import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useWeatherStore } from "../../store/weather";
import { SearchForm } from "./search.type";

export const Search = () => {

  const { control, handleSubmit, formState: { errors } } = useForm<SearchForm>({
    defaultValues: {
      location: '',
    }
  });

  const { weatherQuery } = useWeatherStore(state => ({
    weatherQuery: state.weatherDetails.query
  }));

  const onSearch: SubmitHandler<SearchForm> = ({ location }) => {
    weatherQuery(location);
  };

  return (
    <form onSubmit={handleSubmit(onSearch) as () => void} >
      <Controller
        name="location"
        control={ control }
        rules={{ required: { value: true, message: 'Required'},  }}
        render={({ field: { onChange, value, ref } }) => (
          <input className={!!errors.location ? 'border-solid border-2 border-rose-600' : ''} onChange={onChange} value={value} ref={ref} />
        )}
        />
      <input type="submit" />
    </form>
  );
}