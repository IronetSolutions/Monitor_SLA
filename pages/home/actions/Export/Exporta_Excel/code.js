function base64toBlob(base64Data, contentType) {
    contentType = contentType || '';
    const sliceSize = 1024;
    const byteCharacters = atob(base64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
}

// Paso 2: Convertir el base64 a blob
const blob = base64toBlob({{data.base64}}, {{data.contentType}});

// Paso 3: Crear un enlace de descarga
const downloadLink = document.createElement('a');
downloadLink.href = URL.createObjectURL(blob);
downloadLink.download = 'MONITOR_SLAs_' + moment().format('YYYY_MM_DD_HH_mm_ss'); // Puedes establecer un nombre de archivo personalizado

// Paso 4: Disparar un evento de clic en el enlace para iniciar la descarga
document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);