import { FC } from 'react';
import { flexRender } from '@tanstack/react-table';

import { useTable } from '@components/table/table.hook';
import { TTable } from '@components/table/table.types';

import '@components/table/table.css';

export const Table: FC<TTable> = (props: TTable) => {
  const { table } = useTable(props);
  return (
    <table className='w-full'>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                className='first:rounded-tl-lg bg-neutral-dark-gray p-m text-sm last:rounded-tr-lg'
                key={header.id}
                style={{
                  width: header.column.columnDef.size,
                }}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr
            className='even:bg-neutral-dark-gray odd:bg-neutral-dark-black hover:bg-blue-400/35 text-sm font-normal'
            key={row.id}
          >
            {row.getVisibleCells().map((cell) => (
              <td className='p-s' key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
