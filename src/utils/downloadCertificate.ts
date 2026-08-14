import html2canvas from 'html2canvas';

export async function downloadCertificateImage(elementId = 'certificate-169-frame', studentName = 'HocSinh') {
  const elem = document.getElementById(elementId);
  if (!elem) {
    alert('Không tìm thấy khung giấy chứng nhận để tải về!');
    return;
  }

  try {
    // Hide scrollbars / smooth capture
    const canvas = await html2canvas(elem, {
      scale: 2, // High resolution (2x DPI)
      useCORS: true,
      backgroundColor: null,
      logging: false,
    });

    const imageURI = canvas.toDataURL('image/png');
    const safeName = (studentName || 'HocSinh').replace(/[^a-zA-Z0-9_]/g, '_');
    const fileName = `GiayChungNhan_LichSuDiaLy4_${safeName}.png`;

    const link = document.createElement('a');
    link.href = imageURI;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    console.error('Lỗi khi tải ảnh chứng nhận:', err);
    // Fallback to print
    window.print();
  }
}
