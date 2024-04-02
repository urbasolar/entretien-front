import { useEffect, useState } from 'react'
import {
    getCoreRowModel,
    useReactTable,
  } from '@tanstack/react-table'

import { TTable, } from '@components/table/table.types'

export const useTable = (props: TTable) => {
    const { data, columns, itemsSelected } = props
    const [rowSelection, setRowSelection] = useState({})

    useEffect(() => {
      if(itemsSelected) {
        itemsSelected(rowSelection)
      }
    }, [rowSelection])
    

    const table = useReactTable({
        data,
        columns,
        state: {
          rowSelection,
        },
        enableRowSelection: true, //enable row selection for all rows
        // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        getRowId: (row: any) => row.uuid || row.id,
      })

    return {
        table,
    }
}