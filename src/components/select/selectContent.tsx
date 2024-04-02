import { computeStyles } from '@utils/computeStyles';
import { TSelectContent } from '@components/select/select.types';

export const SelectContent = (props: TSelectContent) => {
  const { isMulti, placeholder, selected, removeOneSelected } = props;
  if (isMulti) {
    return Array.isArray(selected) && selected.length ? (
      selected.map((item) => {
        return (
          <span
            className='label-multiple-select'
            key={item.value}
            onClick={(e) => {
              e.stopPropagation();
              removeOneSelected(item.value);
            }}
          >
            {item.label}
          </span>
        );
      })
    ) : (
      <span className='placeholder lowercase'>{placeholder}</span>
    );
  } else {
    return (
      <span
        className={computeStyles('', {
          condition: selected === undefined,
          valid: 'placeholder',
        })}
      >
        {!Array.isArray(selected) && (selected?.label ?? placeholder)}
      </span>
    );
  }
};
