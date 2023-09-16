import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useWeatherStore } from "../../store/weather";
import { SearchForm } from "./search.type";
import { useRouter } from "next/router";

export const Search = () => {
  const { query, push } = useRouter();
  
  const { weatherQuery, location } = useWeatherStore(state => ({
    weatherQuery: state.weatherDetails.query,
    location: state.searchTerm.location,
  }));

  const { control, handleSubmit, formState: { errors } } = useForm<SearchForm>({
    defaultValues: {
      location: location,
    },
    values: {
      location
    }
  });

  const onSearch: SubmitHandler<SearchForm> = ({ location }) => {
    push(`/?location=${encodeURIComponent(location)}`);

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