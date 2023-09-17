import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useWeatherStore } from "../../store/weather";
import { SearchForm } from "./search.type";
import { useRouter } from "next/router";
import { classList } from "@/util/classList";

export const Search = () => {
  const { query, push } = useRouter();

  const { currentWeatherQuery, location } = useWeatherStore((state) => ({
    currentWeatherQuery: state.currentWeather.query,
    location: state.searchTerm.location,
  }));

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchForm>({
    defaultValues: {
      location: location,
    },
    values: {
      location,
    },
  });

  const onSearch: SubmitHandler<SearchForm> = ({ location }) => {
    push(`/?location=${encodeURIComponent(location)}`);

    currentWeatherQuery(location);
  };

  return (
    <form
      onSubmit={handleSubmit(onSearch) as () => void}
      className="mb-4 flex"
    >
      <Controller
        name="location"
        control={control}
        rules={{ required: { value: true, message: "Required" } }}
        render={({ field: { onChange, value, ref } }) => (
          <input
            className={classList([
              "bg-sky-800 text-slate-50 py-2 pl-2 rounded-tl rounded-bl flex-grow",
              !!errors.location ? "border-solid border-2 border-rose-600" : "",
            ])}
            onChange={onChange}
            value={value}
            placeholder="Search for cities"
            ref={ref}
          />
        )}
      />
      <input
        type="submit"
        className="bg-sky-800 text-slate-50 py-2 px-6 border-l border-slate-50 rounded-tr rounded-br"
      />
    </form>
  );
};
