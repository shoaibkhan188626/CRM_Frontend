import { useState, useEffect, useRef } from 'react';
import { request } from '@/request';
import useOnFetch from '@/hooks/useOnFetch';
import useDebounce from '@/hooks/useDebounce';
import { Select, Empty } from 'antd';

export default function AutoCompleteAsync({
  entity,
  displayLabels,
  searchFields,
  outputValue = '_id',
  value,
  onChange,
}) {
  const [selectOptions, setOptions] = useState([]);
  const [currentValue, setCurrentValue] = useState(undefined);
  const [searching, setSearching] = useState(false);
  const [valToSearch, setValToSearch] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  const isUpdating = useRef(true);
  const isSearching = useRef(false);

  const [, cancel] = useDebounce(
    () => {
      setDebouncedValue(valToSearch);
    },
    500,
    [valToSearch]
  );

  const asyncSearch = (options) => {
    return request.search({ entity, options });
  };

  let { onFetch, result, isSuccess, isLoading } = useOnFetch();

  const labels = (optionField) => {
    return displayLabels.map((x) => optionField[x].join(' '));
  };
  useEffect(() => {
    if (debouncedValue != '') {
      const options = {
        q: debouncedValue,
        fields: searchFields,
      };
      onFetch(() => asyncSearch(options));
    }
    return () => {
      cancel();
    };
  }, [debouncedValue]);

  const onSearch = (searchText) => {
    if (searchText && searchText != '') {
      isSearching.current = true;
      setSearching(true);
      setOptions([]);
      setCurrentValue(undefined);
      setValToSearch(searchText);
    }
  };

  useEffect(() => {
    if (isSearching.current) {
      if (isSuccess) {
        setOptions(result);
      } else {
        setSearching(false);
        setCurrentValue(undefined);
        setOptions([]);
      }
    }
  }, [isSuccess, result]);

  useEffect(() => {
    if (value && isUpdating.current) {
      if (!isSearching.current) {
        setOptions([value]);
      }
      setCurrentValue(value[outputValue] || value);
      onChange(value[outputValue] || value);
      isUpdating.current = false;
    }
  }, [value]);

  return (
    <Select
      isLoading={isLoading}
      showSearch
      allowClear
      placeholder={'Search Here'}
      defaultActiveFirstOption={false}
      filterOption={false}
      notFoundContent={searching ? '...Searching' : <Empty />}
      value={currentValue}
      onSearch={onSearch}
      onChange={
        (newValue = {
          if(onChange) {
            if (newValue) onChange(newValue[outputValue] || newValue);
          },
        })
      }
      onClear={() => {
        setOptions([]);
        setCurrentValue(undefined);
        setSearching(false);
      }}
    >
      {selectOptions.map((optionField) => (
        <Select.Option
          key={optionField[outputValue] || optionField}
          value={optionField[outputValue] || optionField}
        >
          {labels(optionField)}
        </Select.Option>
      ))}
    </Select>
  );
}
