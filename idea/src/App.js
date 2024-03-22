import  Container  from './container/Container';
import './App.css';
import { Routes, Route } from "react-router-dom";
import {
  Body,
  User,
  Signup,
  Taki,
  Market,
  Elektronik,
  Kirtasiye,
  Oyuncak,
  Ayakkabi,
  Tekstil,
  BeyazEsya,
  Mobilya,
  Spor,
  Kozmetik,
  Kampanya,
  ProductDetail,
  Bucket,
} from "./index/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <Body />
            </Container>
          }
        />
        <Route
          path="/Taki"
          element={
            <Container>
              <Taki />
            </Container>
          }
        />
        <Route
          path="/Market"
          element={
            <Container>
              <Market />
            </Container>
          }
        />
        <Route
          path="/Elektronik"
          element={
            <Container>
              <Elektronik />
            </Container>
          }
        />
        <Route
          path="/Kirtasiye"
          element={
            <Container>
              <Kirtasiye />
            </Container>
          }
        />
        <Route
          path="/Oyuncak"
          element={
            <Container>
              <Oyuncak />
            </Container>
          }
        />
        <Route
          path="/Ayakkabi"
          element={
            <Container>
              <Ayakkabi />
            </Container>
          }
        />
        <Route
          path="/Tekstil"
          element={
            <Container>
              <Tekstil />
            </Container>
          }
        />
        <Route
          path="/BeyazEsya"
          element={
            <Container>
              <BeyazEsya />
            </Container>
          }
        />
        <Route
          path="/Mobilya"
          element={
            <Container>
              <Mobilya />
            </Container>
          }
        />
        <Route
          path="/Spor"
          element={
            <Container>
              <Spor />
            </Container>
          }
        />
        <Route
          path="/Kozmetik"
          element={
            <Container>
              <Kozmetik />
            </Container>
          }
        />
        <Route
          path="/kampanya"
          element={
              <Kampanya />
          }
        />
        <Route
          path="/:categoryName/detail/:id"
          element={
            <Container>
              <ProductDetail />
            </Container>
          }
        />
        <Route
        path="/bucket"
        element={
          <Container>
            <Bucket />
          </Container>
        }
      />
        <Route path="login" element={<User />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
