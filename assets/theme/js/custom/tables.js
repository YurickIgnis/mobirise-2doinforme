const lenguaje_tables = {"search": "Buscar:"}
const style_tables = {
    th:{'text-align': 'center'},
    td: {'text-align': 'left'}
}

document.addEventListener("DOMContentLoaded", function(event) {
    tables('#table1',columns_T1, datos_T1);
    tables('#table2',columns_T2, datos_T2);
    table_with_multiple_columns('#table3', datos_T3);
    tables('#table4',columns_T4, datos_T4);
    tables('#table5',columns_T5, datos_T5);
    tables('#table6',columns_T6, datos_T6);
    tables('#table7',columns_T7, datos_T7);
    table_with_multiple_columns('#table8', datos_T8);
    tables('#table9',columns_T9, datos_T9);
    tables('#table10',columns_T10, datos_T10);
    tables('#table11',columns_T11, datos_T11);
    table_with_multiple_columns('#table12', datos_T12);
    table_with_multiple_columns('#table13', datos_T13);
    tables('#table14',columns_T14, datos_T14);
    table_with_multiple_columns("#table15", datos_T39);
    table_with_multiple_columns("#table17", datos_T17);
    tables('#table18',columns_T18, datos_T18);
    tables('#table19', columns_T19,datos_T19);
    table_with_multiple_columns("#table20", datos_T20);
    tables('#table21', columns_T21,datos_T21);
    tables('#table22', columns_T22,datos_T22);
    tables('#table23', columns_T23,datos_T23);
    table_with_multiple_columns("#table24", datos_T24);
    tables('#table25', columns_T25,datos_T25);
    tables('#table26', columns_T26,datos_T26);
    tables('#table27', columns_T27,datos_T27);
    table_with_multiple_columns('#table28',datos_T28);
    tables('#table29', columns_T29,datos_T29);
    tables('#table30', columns_T30,datos_T30);
    table_with_multiple_columns('#table31',datos_T31);
    tables('#table32', columns_T32,datos_T32);
    console.log(datos_T16)
    table_with_multiple_columns("#table16", datos_T16);
    tables('#table16_1', columns_T16_1,datos_T16_1);
    tables('#table16_2', columns_T16_2,datos_T16_2);
    tables('#table16_3', columns_T16_3,datos_T16_3);
    
});


const tables = (id_table, columnas, datos) => {
      $(id_table).DataTable({
        columns: columnas,
        columnDefs: [{className: "text-left"}],
        data: datos,
        rowReorder: {
            selector: 'td:nth-child(2)'
        },
        responsive: true,
        searching: false,
        paging: false,
        order: false,
        language: lenguaje_tables,
        bInfo : false
        });
}

const table_with_multiple_columns = (id_table, datos) => {
    try{
        $(id_table).DataTable({
            rowReorder: {
                selector: 'td:nth-child(2)'
            },
            columnDefs: [{className: "text-left"}],
            data: datos,
            responsive: false,
            searching: false,
            paging: false,
            order: false,
            language: lenguaje_tables,
            bInfo : false,
            scrollX: true
            });
    }catch(e){
        console.log(e)
    }
}
