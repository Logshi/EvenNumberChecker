public class InterestCalculator {
    public static void main(String[] args) {
    double principal = 10000; // Ana para miktarı
    double rate = 5; // Yıllık faiz oranı
    int time = 2; // Yıl sayısı

    // Basit faiz hesaplama
    double simpleInterest = calculateSimpleInterest(principal, rate, time);
    System.out.println("Basit Faiz: " + simpleInterest);

    // Bileşik faiz hesaplama
    double compoundInterest = calculateCompoundInterest(principal, rate, time, 4); // 4, yılda 4 kez bileşik faiz hesaplandığını ifade eder
    System.out.println("Bileşik Faiz: " + compoundInterest);
}

// Basit faiz hesaplama metodu
public static double calculateSimpleInterest(double principal, double rate, int time) {
    return (principal * rate * time) / 100;
}

// Bileşik faiz hesaplama metodu
public static double calculateCompoundInterest(double principal, double rate, int time, int n) {
    return principal * Math.pow(1 + (rate / (n * 100)), n * time) - principal;
}
}
