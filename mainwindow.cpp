#include "mainwindow.h"
#include "ui_mainwindow.h"
#include "QFileDialog"
MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::on_pushButton_pressed()
{
    QString filename = QFileDialog::getOpenFileName(this, "Open image", "/home/kathrine/qt_project/images/diplom/" );
    double contour_area, perimeter, rect_area, ar, rectangularity, sphericity, md=0, ff;
    double circularity,cpr, car;
        float r_big;
        double deviation=0, convex_area;
        Mat imroi;
        leaf = cv::imread(filename.toStdString());//reads initial image
       // namedWindow( "Leaf", CV_WINDOW_AUTOSIZE );
       // imshow( "Leaf", leaf );
        int xx = 20;
        int c =leaf.cols;
        int r = leaf.rows;
        int x = c/2-xx;
        int y = r/2-xx;
       imroi = leaf(cv::Rect(x,y,xx*2,xx*2));//selects rectangle in the midle of an image

        //namedWindow( "Leaf_roi", CV_WINDOW_AUTOSIZE );
       // imshow( "Leaf_roi", imroi );

        Mat hsv;
        cvtColor(imroi, hsv, CV_BGR2HSV);
        Mat hsv_leaf;
        cvtColor(leaf, hsv_leaf, CV_BGR2HSV);
        // Quantize the hue to 30 levels
        // and the saturation to 32 levels
        int hbins = 5, sbins = 7;
        int histSize[] = {hbins, sbins};
        // hue varies from 0 to 179, see cvtColor
        float hranges[] = { 0, 180 };
        // saturation varies from 0 (black-gray-white) to
        // 255 (pure spectrum color)
        float sranges[] = { 0, 256 };
        const float* ranges[] = { hranges, sranges };
        MatND hist;
        // we compute the histogram from the 0-th and 1-st channels
        int channels[] = {0, 1};
        calcHist( &hsv, 1, channels, Mat(),hist, 2, histSize, ranges, true, false );

        normalize( hist, hist, 1.0 );
        // Get Backprojection
        MatND backproj;
        calcBackProject( &hsv_leaf, 1, channels, hist, backproj, ranges, 255.0 );
        // Draw the backproj
       // imshow( "BackProj", backproj );

        //Find external contours
        vector< vector<Point> > contours;

        cv::findContours(backproj, contours, CV_RETR_EXTERNAL,CV_CHAIN_APPROX_NONE);
        //leaves only biggest contour(a leaf on a picture)
        int max = contours[0].size();

        int pos = 0;
        for(int i = 1; i < contours.size(); i++){
            if(max < contours[i].size()){
               max = contours[i].size();
               contours[pos].clear();
               pos = i;
               }
             else{
                contours[i].clear();
                 }
            }
        //Draw a contour and convex hull
         cv::Mat result(backproj.size(),CV_8UC3, cv::Scalar(255,255,255));
         cv::drawContours(result,contours,-1,cv::Scalar(0),2);
         vector<Point>  hull;
         convexHull(Mat(contours[pos]),hull);
         int hs=hull.size();
         double perimeter_c_hull=0;

         for( int j = 0; j < hs; j++ ){
            line(result, hull[j], hull[(j+1)%hs], Scalar(255,0,0), 1, 8 );
            perimeter_c_hull+=sqrt((hull[j].x - hull[(j+1)%hs].x)*(hull[j].x - hull[(j+1)%hs].x)+(hull[j].y - hull[(j+1)%hs].y)*(hull[j].y - hull[(j+1)%hs].y));
          }


         //Red contour around a leaf
         Mat l_clone = leaf.clone();
         cv::drawContours(l_clone,contours,-1,cv::Scalar(0,0,255),2);

        // imshow("contour2", l_clone);

         pixmap = QPixmap::fromImage(putImage(l_clone));
         int w = ui->label->width();
         int h = ui->label->height();

         // set a scaled pixmap to a w x h window keeping its aspect ratio
         ui->label->setPixmap(pixmap.scaled(w,h,Qt::KeepAspectRatio));

         vector<vector<Point> > contours_poly( contours.size() );
         vector<Point2f>center( contours.size() );
         vector<float>radius( contours.size() );
         vector<double> ds(contours[pos].size());
         cout<<"pos "<<pos<<endl;
         cout<<"size "<<contours.size()<<endl;
         double radius_min=0;
         for( int i = 0; i < contours.size(); i++ )
         {
             if(contours[i].size()>0) {

              approxPolyDP( Mat(contours[i]), contours_poly[i], 3, true );
              minEnclosingCircle( contours_poly[i], center[i], radius[i] );
              r_big=radius[i];
              contour_area = contourArea(contours[i]);
              perimeter = contours[i].size();
              double x1 = center[i].x;
              double y1 = center[i].y;
              double x2 = contours[i][0].x;
              double y2 = contours[i][0].y;
              double d_min=sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
              ds[0]=d_min;
              md+=d_min;
              double d=0;
              for(int j=1; j<contours[i].size();j++){
                  double x2 = contours[i][j].x;
                  double y2 = contours[i][j].y;
                  d = sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
                  ds[j]=d;
                  md+=d;
                  if(d_min>d){
                      d_min=d;
                  }
              }
              radius_min=d_min;
             }
            }


         /// Draw contour + circles
         Mat drawing( backproj.size(), CV_8UC3, Scalar(255,255,255) );
         for( int i = 0; i< contours.size(); i++ )
            {
             if(contours[i].size()>0) {
             // drawContours( drawing, contours_poly, i, cv::Scalar(0,0,0), 1, 8, vector<Vec4i>(), 0, Point() );
              drawContours( drawing, contours, i, cv::Scalar(0,0,0), 2, 8, vector<Vec4i>(), 0, Point() );
              circle( drawing, center[i], (int)radius[i], cv::Scalar(0,0,255), 1, 8, 0 );
              circle( drawing, center[i], (int)radius_min, cv::Scalar(0,0,255), 1, 8, 0 );
             }
             }



         //imshow( "Inscribed circle and circumcircle", drawing );

         vector<RotatedRect> minRect( contours.size() );
         vector<RotatedRect> minEllipse( contours.size() );

         for( int i = 0; i < contours.size(); i++ )
            {
             if( contours[i].size() > 0 )
               {
             minRect[i] = minAreaRect( Mat(contours[i]) );
             minEllipse[i] = fitEllipse( Mat(contours[i]) ); }
            }

         /// Draw contours + rotated rects + ellipses
         Mat drawing1( backproj.size(), CV_8UC3, Scalar(255,255,255) );
         Point2f rect_points[4];
         for( int i = 0; i< contours.size(); i++ )
            {
              // contour
              drawContours( drawing1, contours, i, cv::Scalar(0,0,0), 2, 8, vector<Vec4i>(), 0, Point() );
              minRect[i].points( rect_points );
             for( int j = 0; j < 4; j++ ){
                 line( drawing1, rect_points[j], rect_points[(j+1)%4], cv::Scalar(0,0,255), 1, 8 );
              }
              }
    minRect[pos].points( rect_points );
     //imshow("Convex Hull", result);
         md = md/perimeter;//mean value of distances
         for(int i=0; i<ds.size(); i++){
             deviation+=(ds[i]-md)*(ds[i]-md);
         }
         deviation=sqrt(deviation/perimeter);

         double l1 = sqrt((rect_points[0].x-rect_points[1].x)*(rect_points[0].x-rect_points[1].x)+(rect_points[0].y-rect_points[1].y)*(rect_points[0].y-rect_points[1].y));
         double l2 = sqrt((rect_points[1].x-rect_points[2].x)*(rect_points[1].x-rect_points[2].x)+(rect_points[1].y-rect_points[2].y)*(rect_points[1].y-rect_points[2].y));
         if(l1<l2)
             ar=l1/l2;
         else
             ar=l2/l1;
         rect_area=l1*l2;
         convex_area=contourArea(hull);

         rectangularity = contour_area/rect_area;
         sphericity = radius_min/r_big;
         circularity = md/deviation;
         ff = 4*M_PI*contour_area/(perimeter*perimeter);
         cpr = perimeter/perimeter_c_hull;
         car = contour_area/convex_area;
         double willow[] = {0.644476,0.0611748,2.02529,0.279849,1.03082,0.93719,0.154679};
         double bereza[] = {0.652614,0.448211,5.11523,0.439094,1.29257,0.871823,0.855974};
            double dub[] = {0.626187,0.31455,3.89177,0.288009,1.58906,0.858085,0.671637};
            double elm[] = {0.67275,0.451562,4.48295,0.725649,1.03744,0.948322,0.53883};
          double lilac[] = {0.583397,0.372852,5.28711,0.379811,1.34223,0.736798,0.911433};
          String s[] = {"willow","bereza","oak","elm","maple"};


            double derevo_max[5];
            derevo_max[0] = sqrt((rectangularity-willow[0])*(rectangularity-willow[0])+(sphericity-willow[1])*(sphericity-willow[1])+(circularity-willow[2])*(circularity-willow[2])+(ff-willow[3])*(ff-willow[3])+(cpr-willow[4])*(cpr-willow[4])+(car-willow[5])*(car-willow[5])+(ar-willow[6])*(ar-willow[6]));
            derevo_max[1] = sqrt((rectangularity-bereza[0])*(rectangularity-bereza[0])+(sphericity-bereza[1])*(sphericity-bereza[1])+(circularity-bereza[2])*(circularity-bereza[2])+(ff-bereza[3])*(ff-bereza[3])+(cpr-bereza[4])*(cpr-bereza[4])+(car-bereza[5])*(car-bereza[5])+(ar-bereza[6])*(ar-bereza[6]));
            derevo_max[2] = sqrt((rectangularity-dub[0])*(rectangularity-dub[0])+(sphericity-dub[1])*(sphericity-dub[1])+(circularity-dub[2])*(circularity-dub[2])+(ff-dub[3])*(ff-dub[3])+(cpr-dub[4])*(cpr-dub[4])+(car-dub[5])*(car-dub[5])+(ar-dub[6])*(ar-dub[6]));
            derevo_max[3] = sqrt((rectangularity-elm[0])*(rectangularity-elm[0])+(sphericity-elm[1])*(sphericity-elm[1])+(circularity-elm[2])*(circularity-elm[2])+(ff-elm[3])*(ff-elm[3])+(cpr-elm[4])*(cpr-elm[4])+(car-elm[5])*(car-elm[5])+(ar-elm[6])*(ar-elm[6]));
            derevo_max[4] = sqrt((rectangularity-lilac[0])*(rectangularity-lilac[0])+(sphericity-lilac[1])*(sphericity-lilac[1])+(circularity-lilac[2])*(circularity-lilac[2])+(ff-lilac[3])*(ff-lilac[3])+(cpr-lilac[4])*(cpr-lilac[4])+(car-lilac[5])*(car-lilac[5])+(ar-lilac[6])*(ar-lilac[6]));
            double s_m = derevo_max[0];
             int s_min=0;
            for(int i=1; i<5; i++){
                if (s_m > derevo_max[i]){
                    s_m = derevo_max[i];
                    s_min = i;
                }
            }
            recognized_leaf = s[s_min];
}
QImage MainWindow::putImage(const Mat& mat)
{
    // 8-bits unsigned, NO. OF CHANNELS=1
    if(mat.type()==CV_8UC1)
    {
        // Set the color table (used to translate colour indexes to qRgb values)
        QVector<QRgb> colorTable;
        for (int i=0; i<256; i++)
            colorTable.push_back(qRgb(i,i,i));
        // Copy input Mat
        const uchar *qImageBuffer = (const uchar*)mat.data;
        // Create QImage with same dimensions as input Mat
        QImage img(qImageBuffer, mat.cols, mat.rows, mat.step, QImage::Format_Indexed8);
        img.setColorTable(colorTable);
        return img;
    }
    // 8-bits unsigned, NO. OF CHANNELS=3
    if(mat.type()==CV_8UC3)
    {
        // Copy input Mat
        const uchar *qImageBuffer = (const uchar*)mat.data;
        // Create QImage with same dimensions as input Mat
        QImage img(qImageBuffer, mat.cols, mat.rows, mat.step, QImage::Format_RGB888);
        return img.rgbSwapped();
    }
    else
    {

        return QImage();
    }
}

void MainWindow::on_Button_next_pressed()
{
    ui->stackedWidget->setCurrentIndex(2);
    QString url= QString::fromStdString("qrc:///html/"+recognized_leaf+".html");
    ui->webView->load(QUrl(url));
    int w = ui->label_3->width();
    int h = ui->label_3->height();
    int w1 = ui->label_4->width();
    int h1 = ui->label_4->height();
    ui->label_6->setText(QString::fromStdString(recognized_leaf+" leaf"));
    ui->label_3->setPixmap(pixmap.scaled(w,h,Qt::KeepAspectRatio));
    QString px = QString::fromStdString(":/html/images/"+recognized_leaf+"_leaf.jpg");
    QPixmap pixmap2(px);
    ui->label_4->setPixmap(pixmap2.scaled(w1,h1,Qt::KeepAspectRatio));
}

void MainWindow::on_pushButton_2_pressed()
{
    ui->stackedWidget->setCurrentIndex(0);

}
