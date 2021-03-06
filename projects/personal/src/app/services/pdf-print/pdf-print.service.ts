import { Injectable } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import { PageSize } from 'pdfmake/interfaces';
import htmlToPdfmake from 'html-to-pdfmake';
export default 'html-to-pdfmake';


@Injectable({
  providedIn: 'root'
})
export class PdfPrintService {

  constructor() { }

  generatePdf(html: any) {
    var content = htmlToPdfmake(html);
    const def = { content: content };
    pdfMake.createPdf(def).open();
  }

  openPdf(content: any) {
    const def = { content: content };
    pdfMake.createPdf(def).open();
  }

  printPdf(content: any) {
    const def = { content: content };
    pdfMake.createPdf(def).print();
  }

  downloadPdf(content: any) {
    const def = { content: content };
    pdfMake.createPdf(def).download();
  }

  printRoll(content: any) {
    // TODO:
    const pageSize: PageSize = {
      width: 595.28,
		  height: 'auto'
    }

    const def = { content: content, pageSize: pageSize };
    pdfMake.createPdf(def).print();
  }

}
