package scraping;

import java.io.File;
import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class TryScreenScraping {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		File input = new File("D:/Tugas/Learning/AirAsia   Booking   Book low fares online.html");
		try {
			Document doc = Jsoup.parse(input, "UTF-8", "https://booking.airasia.com");
	        String title = doc.title();
	        System.out.println(title);
	        
	        Element div = doc.getElementById("taxAndFeeResult");
	        Elements fhtCrs = div.select("div.depart-return-msg");
	        Element depLbl = div.select("a").get(0);
	        Element arLbl = div.select("a").get(1);
	        Elements dep = div.select("div.flightDisplay_1");
	        Elements ar = div.select("div.flightDisplay_2");
	        Elements sumAll = doc.select("div.total-amount-bg-last");
	        
	        TryScreenScraping f = new TryScreenScraping();
	        
	        System.out.println("Filght Course : " + fhtCrs.text() + "\n" + depLbl.text());
	        f.info(dep);
	        System.out.println( "\n" + arLbl.text());
	        f.info(ar);
	        System.out.println("\n"+sumAll.text());

	        
	        

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		

	}
	
	public void info(Elements dept_ret){
        Elements row1 = dept_ret.select("div.row1");
        Elements row2 = dept_ret.select("div.row2");
        Element[] info1 = new Element[10];
        Element[] info2 = new Element[3];

        for (int i=0;i<10;i++){
        	info1[i] = row1.select("span").get(i);
        }
        
        for (int i=0;i<3;i+=2){
        	info2[i] = row2.select("div.left").get(i);
        	
        }
        
        Element numFlight = info1[0];
        Element fr = info2[0];
        Element to = info2[2];
        Element tmDep = info1[1];
        Element tmAr = info1[2];
        Element fareLbl = info1[3];
        Element sumFare = info1[4];
        Element psg = info1[5];
        Element tx1Lbl = info1[6];
        Element sumTx = info1[7];
        Element tx2Lbl = info1[8];
        Element sum1Trp = info1[9];
        

        System.out.print("Flight Number : "+numFlight.text() +
        		"\nFrom : " + fr.text() + " " + tmDep.text() + " to : " + to.text() +" "+ tmAr.text() +
        		"\n"+fareLbl.text()+ " : " + psg.text() + " " + sumFare.text() + 
        		"\n"+tx1Lbl.text() + " :\n" + tx2Lbl.text() + " : " + sumTx.text() +   
        		"\nTotal 1 Way Trip : " + sum1Trp.text()
        		);
        
        
	}

}
