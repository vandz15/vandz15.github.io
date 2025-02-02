import { Fragment, useState } from "react";

const ProductCard = ({ product }) => {
    const [varians, setVarian] = useState(null);

    const handleVarian = async (ID) => {
        product?.varian?.map((varian) => {
            if (varian?.id === ID) {
                setVarian(varian);
            }
        });
    };

    return (
        <li>
            <div className="recipe recipe-card">
                <img src={product?.images} alt="" 
                className={`${product?.varian?.every((v) => v?.stok === 0) ? "out-of-stock" : ""}`} />
                <div className={`recipe-body ${product?.varian?.every((v) => v?.stok === 0)
                            ? "out-of-stock"
                            : ""}`}>
                    <div>
                        <h2 className="text-primary">
                            <small>Rp</small>{" "}
                            {varians !== null
                                ? varians?.harga?.toLocaleString("id-ID")
                                : product?.varian?.length > 1
                                ? product?.varian[0]?.harga?.toLocaleString(
                                      "id-ID"
                                  ) +
                                  " - " +
                                  product?.varian[
                                      product?.varian.length - 1
                                  ]?.harga?.toLocaleString("id-ID")
                                : product?.varian[0]?.harga.toLocaleString(
                                      "id-ID"
                                  )}
                        </h2>
                    </div>
                    <a
                        className="recipe-title recipe-link"
                        title="recipe.title"
                    >
                        {product.name}
                    </a>
                    {product?.varian?.length > 0 && (
                        <Fragment>
                            <div className="mt-1">
                                <p>
                                    Pilih Variasi{" "}
                                    <small>
                                        ({product?.varian?.length} Size)
                                    </small>
                                </p>
                            </div>

                            <div className="recipe-info">
                                {product?.varian
                                ?.map((varian, idx) => (
                                    <div
                                        className={`icon-group ${
                                            varian?.stok === 0 ? "disabled" : ""
                                        }`}
                                        key={idx || varian}
                                        onClick={() =>
                                            varian?.stok > 0 && handleVarian(varian?.id)
                                        }
                                    >
                                        <span
                                            className={`badge badge-outline-primary ${
                                                varians?.id === varian?.id ||
                                                product?.varian?.length === 1
                                                    ? "active"
                                                    : ""
                                            } ${
                                                varian?.stok === 0 ? "out-of-stock" : ""
                                            }`}
                                        >
                                            {varian?.jumlah} {varian?.nama_berat}
                                            {varian?.stok === 0 && ""}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Fragment>
                    )}

                    <button
                        className="btn btn-primary"
                        style={{ marginTop: "2rem" }}
                        onClick={() =>
                            window.open(
                                `https://wa.me/${
                                    product?.link_wa
                                }?text=Halo,pesan ${product.name} ${
                                    varians?.jumlah
                                        ? varians?.jumlah
                                        : product?.varian[0].jumlah
                                } ${
                                    varians?.nama_berat
                                        ? varians?.nama_berat
                                        : product?.varian[0].nama_berat
                                } Rp ${
                                    varians?.harga
                                        ? varians?.harga?.toLocaleString(
                                              "id-ID"
                                          )
                                        : product?.varian[0].harga.toLocaleString(
                                              "id-ID"
                                          )
                                } vandz15.github.io. Ini alamat kirim saya`,
                                "_blank"
                            )
                        }
                        disabled={
                            (product?.varian?.length > 1 && varians === null) || 
                            product?.varian?.every((v) => v?.stok === 0) // Tidak ada stok
                        }
                    >
                        {product?.varian?.length === 1 && product?.varian[0]?.stok > 0 || varians !== null
                            ? "Pesan via Whatsapp"
                            : product?.varian?.every((v) => v?.stok === 0)
                            ? "Stok Habis"
                            : "Pilih Varian (size)"}
                    </button>
                    {product?.link_shopee && (
                        <button
                            className="btn btn-shopee"
                            style={{ marginTop: "1rem" }}
                            onClick={() =>
                                window.open(product?.link_shopee, "_blank")
                            }
                            target="_blank"
                            disabled={
                                (product?.varian?.length > 1 && varians === null) || 
                                product?.varian?.every((v) => v?.stok === 0) // Tidak ada stok
                            }
                        >
                            {product?.varian?.length === 1 && product?.varian[0]?.stok > 0 || varians !== null
                            ? "Pesan via Shopee"
                            : product?.varian?.every((v) => v?.stok === 0)
                            ? "Stok Habis"
                            : "Pilih Varian (size)"}
                        </button>
                    )}
                </div>
            </div>
        </li>
    );
};

export default ProductCard;
