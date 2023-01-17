import React from "react"
import { Route, Switch } from "react-router-dom"

import Newsale from "./NewsalePage"
import Setup from "./Setup"
import Checkout from "./Checkout"
import Products from "./Products"
import ProductList from "./ProductList"
import ImportProduct from "./ImportProduct"
import NewProduct from "./NewProduct"
import Services from "./Services"
import Memberships from "./Memberships"
import CreateMembership from "./CreateMembership"
import CreateMembershipPage from "./CreateMembershipPage"
import Vouchers from "./Vouchers"
import CreateVoucher from "./CreateVoucher"
import Dailysales from "./Dailysales"
import Appointments from "./Appointments"
import SalesHistory from "./SalesHistory"
import PaymentPage from "./PaymentPage"
import Voucher from "./Voucher"
import Membership from "./Membership"

function Index() {
  return (
    <div style={{ width: "1365px", height: "560px" }}>
      <Switch>
        <Route path="/" element={<Newsale />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/services" element={<Services />} />
        <Route path="/memberships" element={<Memberships />} />
        <Route path="/create" element={<CreateMembership />} />
        <Route path="/createmembership" element={<CreateMembershipPage />} />
        <Route path="/vouchers" element={<Vouchers />} />
        <Route path="/createvoucher" element={<CreateVoucher />} />
        <Route path="/import" element={<ImportProduct />} />
        <Route path="/new" element={<NewProduct />} />
        <Route path="/dailysales" element={<Dailysales />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/saleshistory" element={<SalesHistory />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/voucher" element={<Voucher />} />
        <Route path="/membership" element={<Membership />} />
      </Switch>
    </div>
  )
}

export default Index