function jsfShowModal(argOFSID, argLNGID, argPSTID, argPTLE1) {
    var formData = {
        'OFSID': argOFSID,
        'LNGID': argLNGID,
        'PSTID': argPSTID,
    };

    $.when($.ajax({type: 'POST', dataType: 'json', data : formData, url : '/tgpst'}))
    .done(function(data, textStatus, jqXHR) {
        var aRow = data.aRow;
        if(aRow.PMDLG==0) {
            $('#myModalLabel').html(argPTLE1);
            $('#myModalBody').html(aRow.PTEXT);
            $('#myModal').modal("show");
        }
        else if(aRow.PMDLG==1) {
            $('#myModalLargeLabel').html(argPTLE1);
            $('#myModalLargeBody').html(aRow.PTEXT);
            $('#myModalLarge').modal("show");
        }
    })
    .fail(function(jqXHR, textStatus, errorThrown) { alert('錯誤代碼 '+jqXHR.status); });
}