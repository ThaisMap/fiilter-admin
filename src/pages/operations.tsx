import { Button, Container, Paper } from "@mui/material"
import type { NextPage } from "next"
import React from "react"
import Title from "../components/Title"
import {
  DataGrid,
  GridColDef,
  GridValueFormatterParams
} from "@mui/x-data-grid"
import AddIcon from "@mui/icons-material/Add"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { toggleNewOperationModal } from "../redux/slices/layout"

export const columns: GridColDef[] = [
  {
    field: "type",
    headerName: "Tipo",
    flex: 1,
    align: "center",
    headerAlign: "center"
  },
  {
    field: "fund",
    headerName: "Fundo",
    flex: 1,
    align: "center",
    headerAlign: "center"
  },
  {
    field: "amount",
    headerName: "Cotas",
    flex: 1,
    align: "center",
    headerAlign: "center"
  },
  {
    field: "price",
    headerName: "Preço",
    flex: 1,
    align: "center",
    headerAlign: "center",
    valueFormatter: (params: GridValueFormatterParams) => {
      const valueFormatted = (params.value as number).toFixed(2)
      return `RS ${valueFormatted}`
    }
  },
  {
    field: "date",
    headerName: "Data",
    flex: 1,
    align: "center",
    headerAlign: "center",
    valueFormatter: (params: GridValueFormatterParams) => {
      const valor: Date = params.value as Date
      const valueFormatted = valor.toLocaleDateString()
      return valueFormatted
    }
  }
]

const OperationsPage: NextPage = () => {
  const rows = useAppSelector(state => state.carteira.operations)
  const dispatch = useAppDispatch()
  const handleNewTransaction = () => {
    dispatch(toggleNewOperationModal())
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4, alignItems: "flex-end" }}>
      <Button
        sx={{ mb: 2 }}
        startIcon={<AddIcon />}
        variant="contained"
        onClick={handleNewTransaction}>
        Nova operação
      </Button>
      <Paper sx={{ p: 3, height: "85vh" }}>
        <Title>Operações</Title>
        <DataGrid
          rows={rows}
          columns={columns}
          autoPageSize
          hideFooterSelectedRowCount
          sx={{ height: "75vh" }}
        />
      </Paper>
    </Container>
  )
}

export default OperationsPage
