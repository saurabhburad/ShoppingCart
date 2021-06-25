from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask import jsonify
from flask import request
# from flask_marshmallow import Marshmallow
# from flask_cors import CORS

app = Flask(__name__, static_url_path='', static_folder='dist')
#CORS(app)
#postgresql://postgres:Foundat1@n@localhost/test
ENV = 'prod'

if ENV == 'dev':
    app.debug = True
    app.config['SQLALCHEMY_DATABASE_URI'] = ''
else:
    app.debug = True
    app.config['SQLALCHEMY_DATABASE_URI'] = ''

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
# ma = Marshmallow(app)

class shoppingproducts(db.Model):
    __tablename__ = 'shoppingproducts'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    description = db.Column(db.Text())
    productDetails = db.Column(db.Text())
    price = db.Column(db.Integer)
    rating = db.Column(db.Integer)
    image1 = db.Column(db.String(200))
    image2 = db.Column(db.String(200))
    image3 = db.Column(db.String(200))
    image4 = db.Column(db.String(200))
    image5 = db.Column(db.String(200))

    def __init__(self, description, productDetails, price, rating, image1,image2,image3,image4,image5):
        self.description = description
        self.productDetails = productDetails
        self.price = price
        self.rating = rating
        self.image1 = image1
        self.image2 = image2
        self.image3 = image3
        self.image4 = image4
        self.image5 = image5
    def to_json(self):
        return {
            'id':self.id,
            'description': self.description,
            'productDetails': self.productDetails,
            'price': self.price,
            'rating': self.rating,
            'image1': self.image1,
            'image2': self.image2,
            'image3': self.image3,
            'image4': self.image4,
            'image5': self.image5,
        }


# class shoppingproductsSchema(ma.Schema):
#     class Meta:
#         fields = ('id', 'description', 'productDetails', 'price', 'rating','image1','image2','image3','image4','image5')


# product_schema = shoppingproductsSchema()
# products_schema = shoppingproductsSchema(many=True)


@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/getproductdata', methods=['GET'])
def getproductdata():
    if request.method == 'GET':
        all_options = [option.to_json() for option in shoppingproducts.query.all()]
        return jsonify(all_options)

@app.route('/search/<query>', methods=['GET'])
def getSearch(query): 
    new_list = []
    if request.method == 'GET':
        search = query
        all_options = [option.to_json() for option in shoppingproducts.query.all()]
        for item in all_options:
            if search.lower() in (item['description'].lower() or item['productDetails'].lower()):
                new_list.append(item)
        return jsonify(new_list)


@app.route('/update/<id>', methods=['PUT'])
def update(id):
    if request.method == 'PUT':
        product = shoppingproducts.query.filter_by(id=id).first()

        description = request.json['description']
        productDetails = request.json['productDetails']
        price = request.json['price']
        rating = request.json['rating']
        image1 = request.json['image1']
        image2 = request.json['image2']
        image3 = request.json['image3']
        image4 = request.json['image4']
        image5 = request.json['image5']

        product.description = description
        product.productDetails = productDetails
        product.price = price
        product.rating = rating
        product.image1 = image1
        product.image2 = image2
        product.image3 = image3
        product.image4 = image4
        product.image5 = image5
        db.session.add(product)
        db.session.commit()


        return jsonify(message='You have updated data') 



@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        print(request)
        description = request.json['description'],
        productDetails = request.json['productDetails']
        price = request.json['price']
        rating = request.json['rating']
        image1 = request.json['image1']
        image2 = request.json['image2']
        image3 = request.json['image3']
        image4 = request.json['image4']
        image5 = request.json['image5']

        # print(customer, dealer, rating, comments)
        if description == '' or productDetails == '':
            return jsonify(message='Please enter required fields')
        else:
            data = shoppingproducts(description, productDetails, price, rating, image1,image2,image3,image4,image5)
            print(data)
            db.session.add(data)
            db.session.commit()
            return jsonify(message='You have uploded data')

@app.route("/removeData/<id>", methods=["DELETE"])
def removeData_delete(id):
    data = shoppingproducts.query.get(id)
    db.session.delete(data)
    db.session.commit()

    return jsonify(message="record was successfully deleted")

@app.route('/<path:path>')
def static_proxy(path):
    # send_static_file will guess the correct MIME type
    return app.send_static_file(path)
if __name__ == '__main__':
    app.run()
