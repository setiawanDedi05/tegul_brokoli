// File: src/utils/currencyFormatter.ts

/**
 * Memformat angka menjadi string mata uang Rupiah (Rp).
 *
 * @param amount Angka yang akan diformat.
 * @param showCurrencySymbol Menampilkan simbol 'Rp' (default: true).
 * @returns String yang diformat dalam mata uang Rupiah.
 */
export const formatRupiah = (amount: number | string, showCurrencySymbol: boolean = true): string => {
    // Pastikan amount adalah number. Jika string, coba konversi.
    const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
  
    // Cek jika amount bukan angka valid setelah konversi
    if (isNaN(numericAmount)) {
      return showCurrencySymbol ? 'Rp 0' : '0'; // Mengembalikan nilai default jika tidak valid
    }
  
    // Menggunakan Intl.NumberFormat untuk format Rupiah
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0, // Tidak menampilkan desimal jika tidak ada
      maximumFractionDigits: 2, // Maksimal 2 angka di belakang koma untuk desimal
    });
  
    const formattedString = formatter.format(numericAmount);
  
    // Jika showCurrencySymbol false, hapus simbol 'Rp'
    if (!showCurrencySymbol) {
      // Intl.NumberFormat di 'id-ID' akan menghasilkan "Rp10.000" atau "Rp 10.000"
      // Kita perlu menghapus "Rp" dan spasi opsional di depannya
      return formattedString.replace(/^Rp\s*/, '');
    }
  
    return formattedString;
  };